import { useState } from "react";
import { css, styled } from "styled-components";

const createMap = (props: { h: number; w?: number }): number[][] => {
  const { w, h } = props;
  const width = new Array(w ?? h);
  const newMap = [];

  for (let i = 0; i < h; i++) {
    newMap.push(width);
  }

  return newMap;
};

const StyledMap = styled("div")`
  display: flex;
  flex-direction: column;
`;

const StyledRow = styled("div")`
  display: flex;
`;

const StyledSquare = styled("div")<StyledSquareProps>`
  margin: 2px;
  background-color: blue;
  height: 25px;
  width: 25px;
  ${(props) => {
    return (
      props.value === 1 &&
      css`
        background-color: red;
      `
    );
  }}
`;

type StyledSquareProps = {
  value: number;
};

export const Map = () => {
  const [mazeMap, setMap] = useState<number[][]>([
    [0, 1, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]);
  return (
    <StyledMap>
      {mazeMap.map((r) => {
        return (
          <StyledRow>
            {r.map((s) => {
              return <StyledSquare value={s}> </StyledSquare>;
            })}
          </StyledRow>
        );
      })}
    </StyledMap>
  );
};
