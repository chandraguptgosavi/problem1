import styled from "styled-components";

const GridItem = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.5rem 0;
  border: 1px solid black;

  @media(min-width: 768px){
    width: 40%;
  }
`;

export default GridItem;
