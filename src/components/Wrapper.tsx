import { PropsWithChildren } from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  max-width: 1312px;
  margin: auto;
  padding: 0 1rem;
`;

function Wrapper(props: PropsWithChildren) {
  return <WrapperStyled>{props.children}</WrapperStyled>;
}

export default Wrapper;
