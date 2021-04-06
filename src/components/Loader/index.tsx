import React from "react";
import Skeleton from "react-loading-skeleton";
import { Wrapper, Group } from "./styled";

export const Loader: React.FC = () => {
  return (
    <Wrapper>
      <Skeleton height={13} />
      <Skeleton height={13} />
      <Group>
        <Skeleton height={13} />
        <Skeleton height={13} width="90%" />
        <Skeleton height={13} />
      </Group>
      <Skeleton height={13} />
      <Group>
        <Skeleton height={13} />
        <Skeleton height={13} width="90%" />
        <Skeleton height={13} />
      </Group>
      <Skeleton height={13} />
      <Group>
        <Skeleton height={13} />
        <Skeleton height={13} width="90%" />
        <Skeleton height={13} />
      </Group>
      <Skeleton height={13} />
      <Group>
        <Skeleton height={13} />
        <Skeleton height={13} width="90%" />
        <Skeleton height={13} />
      </Group>
    </Wrapper>
  );
};
