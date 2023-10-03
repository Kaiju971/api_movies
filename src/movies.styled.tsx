import { styled } from "@mui/material/styles";
import cine from "./image/cine.jpg";

export const MainContainer = styled("div")`
  background-image: url(${cine});
  background-size: cover;
  min-height: 100vh;

  @media (max-width: 750px) {
    width: 100vw;
  }
`;

export const ContainerList = styled("div")`
  display: flex;
flex-direction:column;
justify-content: space-evenly;

  @media (max-width: 750px) {
    width: 30vw;
  
   
  
  }
`;

export const List = styled("div")`
  grid-column: 1;
  cursor: pointer;
  color: white;

  @media (max-width: 750px) {
    width: 100vw;
  }
`;

export const Details = styled("div")`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 750px) {
    width: 100vw;
  }
`;
