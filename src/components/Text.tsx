import styled from "styled-components";

import {TextProps} from 'app/types';

const Text = styled.p<TextProps>`
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
  text-decoration: ${(props) => (props.isUnderlined ? "underline" : "none")};
  font-style: ${(props) => (props.isItalic ? "italic" : "normal")};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "medium")};
  color: ${(props) => props.customColor ?? "black"};
`;

export default Text;