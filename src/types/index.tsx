export type Page = {
  id: string;
  title: string;
  level: number;
  tabIndex: number;
  url: string;
  disqus_id?: string;
  anchors?: [];
  pages?: string[];
  selectFirstChildOnClick?: boolean;
};

export type Anchor = {
  id: string;
  parentId: string;
  title: string;
  url: string;
  anchor: string;
  level: number;
  disqus_id?: string;
};

export type Pages = {
  [key: string]: Page;
};

export type Anchors = {
  [key: string]: Anchor;
};

export type ApiResponse = {
  entities: {
    pages: Pages;
    anchors: Anchors;
  };
  topLevelIds: string[];
};
