import React, { useState, useEffect } from "react";
import { Wrapper, Top, Title, ArrowContainer } from "../ListItem/styled";

type Props = {
  id: string;
  title: string;
  level: number;
  currentActiveAnchor: string;
  setActiveAnchor: (id: string) => void;
};

export const AnchorItem: React.FC<Props> = ({
  id,
  title,
  level,
  currentActiveAnchor,
  setActiveAnchor,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setActiveAnchor(id);
  };

  useEffect(() => {
    if (currentActiveAnchor === id) {
      setIsActive(true);
    }
    return () => {
      setIsActive(false);
    };
  }, [currentActiveAnchor, id]);

  return (
    <Wrapper>
      <Top onClick={handleClick} level={level} isActive={isActive}>
        <ArrowContainer isRotated={false}></ArrowContainer>
        <Title isActive={isActive}>{title}</Title>
      </Top>
    </Wrapper>
  );
};
