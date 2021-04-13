import React, { memo } from "react";

import { ArrowIcon } from "../../icons/arrow";
import { Wrapper } from "./styled";

type Props = {
  isOpened: boolean;
};

export const Arrow: React.FC<Props> = memo(({ isOpened }) => {
  return (
    <Wrapper isRotated={isOpened}>
      <ArrowIcon />
    </Wrapper>
  );
});
