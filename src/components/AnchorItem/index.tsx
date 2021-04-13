import React, { useState, useEffect, memo } from "react";
import { Wrapper, Top, Title, ArrowContainer } from "../ListItem/styled";

type Props = {
  id: string;
  title: string;
  level: number;
  setActiveAnchor: (id: string) => void;
  currentActiveAnchor: string;
};

export const AnchorItem: React.FC<Props> = memo(
  ({ id, title, level, setActiveAnchor, currentActiveAnchor }) => {
    const isActive: boolean = currentActiveAnchor === id;

    const handleClick = () => {
      setActiveAnchor(id);
    };

    return (
      <Wrapper>
        <Top onClick={handleClick} level={level} isActive={isActive}>
          <ArrowContainer></ArrowContainer>
          <Title isActive={isActive}>{title}</Title>
        </Top>
      </Wrapper>
    );
  }
);
