import styled from "styled-components";
import { PanelDirection } from "./settings/settings.types";

export const PanelButton = styled.div`
  cursor: pointer;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background: #e2e1e1;
  color: black;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div<{ direction?: PanelDirection }>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "vertical" ? "column" : "row"};
  align-items: center;
  background: white;
  padding: 5px 2px;
  border-radius: 10px;
  gap: 10px;
`;
