import { theme } from "../../styles/theme";
import * as Styled from "./styles";

export const Heading = ({ children }) => {
  return <Styled.Title theme={theme}>{children}</Styled.Title>
}