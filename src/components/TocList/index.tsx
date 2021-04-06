import React, { useState, useEffect, useCallback } from "react";
import { getData, initialState } from "../../api/";
import { Page, ApiResponse, Pages, Anchor } from "../../types";
import { ListItem } from "../ListItem";
import { Loader } from "../Loader";
import { Wrapper, PagesList } from "./styled";

export const TocList: React.FC = () => {
  const [data, setData] = useState<ApiResponse>(initialState);
  const [pages, setPages] = useState<Page[]>([]);
  const [currentActive, setCurrentActive] = useState<string>("");
  const [currentActiveAnchor, setCurrentActiveAnchor] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getData()
      .then((data: ApiResponse) => {
        setData(data);
        buildTree(data.entities.pages, data.topLevelIds);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        console.log(error);
      });
  }, []);

  // Build initial pages
  const buildTree = (pages: Pages, topLevelIds: string[]): void => {
    let firstLevel: Page[] = [];
    topLevelIds.forEach((id: string) => {
      firstLevel.push(pages[id]);
    });
    setPages(firstLevel);
  };

  // Build anchors
  const buildAnchors = useCallback(
    (andchorsIds: string[]): Anchor[] => {
      let anchorsTemp: Anchor[] = [];
      andchorsIds.forEach((id: string) => {
        anchorsTemp.push(data!.entities.anchors[id]);
      });
      return anchorsTemp;
    },
    [data]
  );

  // Get subpages Ids by parent Id
  const getSubPagesIdsById = useCallback(
    (id: string): string[] | undefined => {
      return data.entities.pages[id].pages;
    },
    [data]
  );

  // Get single page by Ids
  const getPageById = useCallback(
    (id: string): Page => {
      return data.entities.pages[id];
    },
    [data]
  );

  // Build subpages
  const buildSubpages = useCallback(
    (id: string): Page[] => {
      let list: Page[] = [];
      const subPages = getSubPagesIdsById(id);
      subPages?.forEach((pageId: string) => {
        const page = getPageById(pageId);
        list.push(page);
      });

      return list;
    },
    [getPageById, getSubPagesIdsById]
  );

  // Set active page
  const setActive = useCallback(
    (id: string): void => {
      const currentActiveId = data.entities.pages[id].id;
      setCurrentActive(currentActiveId);
    },
    [data]
  );

  // Set active anchor
  const setActiveAnchor = useCallback(
    (id: string): void => {
      const currentActiveId = data.entities.anchors[id].id;
      setCurrentActiveAnchor(currentActiveId);
    },
    [data]
  );

  if (isError) {
    return <>Oops, something went wrong</>;
  }

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <PagesList>
          {pages.map(({ id, title, pages, level, anchors }: Page) => (
            <ListItem
              key={id}
              id={id}
              title={title}
              pages={pages}
              anchors={anchors}
              level={level}
              currentActive={currentActive}
              currentActiveAnchor={currentActiveAnchor}
              buildSubpages={buildSubpages}
              buildAnchors={buildAnchors}
              setActive={setActive}
              setActiveAnchor={setActiveAnchor}
            ></ListItem>
          ))}
        </PagesList>
      )}
    </Wrapper>
  );
};
