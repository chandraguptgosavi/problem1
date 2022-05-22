import styled from "styled-components";

type InputProps = {
    visible?: boolean;
};

const Input = styled.input<InputProps>`
  margin: 0.25rem 0;
  visibility: ${(props) => props.visible ? 'visible': 'hidden'};
`;

export default Input;
