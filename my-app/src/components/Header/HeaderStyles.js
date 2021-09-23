import styled from "styled-components";

export const Container = styled.header`
  display: block;
  width: 100%;
  max-height: 85px;
  margin: 0 auto;
  padding: 0 10px;
  background: ${(props) => props.theme.colors.primary1}; ;
`;

Container.displayName = "Container";

export const Wrap = styled.div`
  display: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 980px;
`;
export const Logo = styled.div`
  display: block;
  max-width: 120px;
  left: 10px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  --moz-transform: translateY(-50%);
  transform: translateY(-50%);
`;

export const Image = styled.img`
  max-width: 70%;
  margin-top: 9rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary1};
`;
