import styled from "styled-components";

type DialogProps = {
  isOpen: boolean;
};

const Dialog = styled.div<DialogProps>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.5rem;
  z-index: 100;
  box-shadow: 0.25em 0.25em 0.2em #c5c7c5, -1px -1px 1px #c5c7c5;
  border-radius: 0.25em;
  border: 1px solid black;
  background-color: white;
`;

export default Dialog;
