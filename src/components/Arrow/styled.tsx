import styled from "styled-components";

export const Wrapper = styled.div<{ isRotated: boolean }>`
  svg {
    transition: transform 0.3s;
    transform: ${({ isRotated }) => (isRotated ? "rotate(180deg)" : undefined)};
  }
`;
