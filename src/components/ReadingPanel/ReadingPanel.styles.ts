import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 1px solid lightgray;
  background: white;
  padding: 5px 2px;
  border-radius: 10px;
  height: 40px;
  overflow: hidden;
`;

export const PanelButton = styled.button`
  background: white;
  color: black;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
