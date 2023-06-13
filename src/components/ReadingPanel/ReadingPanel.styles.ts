import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 5px 2px;
  border-radius: 10px;
`;

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

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
