import React, { useState, memo } from "react";
import { Page, Anchor } from "../../types";
import {
  Wrapper,
  Inner,
  Top,
  Title,
  ArrowContainer,
  AnchorList,
} from "./styled";
import { AnchorItem } from "../AnchorItem";
import { Arrow } from "../Arrow";

type Props = {
  id: string;
  title: string;
  level: number;
  currentActive: string;
  currentActiveAnchor: string;
  active: boolean;
  setActive: (id: string) => void;
  setActiveAnchor: (id: string) => void;
  buildAnchors: (id: string[]) => Anchor[];
  buildSubpages: (id: string) => Page[];
  pages?: string[];
  anchors?: string[];
};

export const ListItem: React.FC<Props> = memo(
  ({
    id,
    title,
    pages,
    level,
    anchors,
    setActive,
    setActiveAnchor,
    buildAnchors,
    buildSubpages,
    currentActive,
    currentActiveAnchor,
    active,
  }) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const [subPagesList, setSubPagesList] = useState<Page[]>([]);
    const [anchorsList, setAnchorsList] = useState<Anchor[]>([]);

    // Get subpages
    const getSubpages = () => {
      setIsOpened(true);
      setSubPagesList(buildSubpages(id));
    };

    const clearSubPages = () => {
      setIsOpened(false);
      setSubPagesList([]);
    };

    const handleClick = () => {
      setActive(id);
      if (anchors && anchors.length > 0) {
        const anchorsData = buildAnchors(anchors);
        setAnchorsList(anchorsData);
      }
      if (pages && pages.length > 0) {
        isOpened ? clearSubPages() : getSubpages();
      }
    };

    return (
      <Wrapper>
        <Top onClick={handleClick} level={level} isActive={active}>
          <ArrowContainer>
            {pages && pages?.length > 0 && <Arrow isOpened={isOpened}></Arrow>}
          </ArrowContainer>
          <Title isActive={active}>{title}</Title>
        </Top>
        {active && anchorsList.length > 0 && (
          <AnchorList>
            {anchorsList.map(({ id, title }: Anchor) => (
              <AnchorItem
                key={id}
                id={id}
                level={level + 1}
                title={title}
                currentActiveAnchor={currentActiveAnchor}
                setActiveAnchor={setActiveAnchor}
              ></AnchorItem>
            ))}
          </AnchorList>
        )}
        {subPagesList.length > 0 && (
          <Inner>
            {subPagesList.map(({ id, level, title, pages, anchors }: Page) => (
              <ListItem
                key={id}
                id={id}
                level={level}
                title={title}
                pages={pages}
                anchors={anchors}
                buildAnchors={buildAnchors}
                setActive={setActive}
                setActiveAnchor={setActiveAnchor}
                buildSubpages={buildSubpages}
                active={id === currentActive}
                currentActive={currentActive}
                currentActiveAnchor={currentActiveAnchor}
              ></ListItem>
            ))}
          </Inner>
        )}
      </Wrapper>
    );
  }
);
