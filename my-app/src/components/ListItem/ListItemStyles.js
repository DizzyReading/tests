import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.primary1};
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.primary1};
`;
