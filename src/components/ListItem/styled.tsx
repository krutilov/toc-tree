import styled from "styled-components";

const levelOffset = (level: number) => {
  if (level === 0) {
    return "26px";
  }
  if (level === 1) {
    return "34px";
  }
  if (level === 2) {
    return "53px";
  }
  if (level === 3) {
    return "82px";
  }
};

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

export const Title = styled.div<{ isActive: boolean }>`
  line-height: 19px;
  color: #343434;
  text-decoration: none;
  letter-spacing: ${({ isActive }) => (isActive ? "-0.55px" : undefined)};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
`;

export const Top = styled.div<{ level: number; isActive: boolean }>`
  display: flex;
  align-items: flex-start;
  font-size: 14px;
  font-weight: 500;
  padding: 6px 5px 6px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  padding-left: ${({ level }) => levelOffset(level)};
  background-color: ${({ isActive }) => (isActive ? "#F0F0F0" : undefined)};
  &:hover {
    ${Title} {
      text-decoration: underline;
    }
  }
`;

export const Inner = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

export const ArrowContainer = styled.div<{ isRotated: boolean }>`
  flex-shrink: 0;
  min-width: 8px;
  display: flex;
  margin-right: 5px;
  transform: translateY(8px);
  svg {
    transition: transform 0.3s;
    transform: ${({ isRotated }) => (isRotated ? "rotate(180deg)" : undefined)};
  }
`;

export const AnchorList = styled.ul`
  background: #f0f0f0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;
