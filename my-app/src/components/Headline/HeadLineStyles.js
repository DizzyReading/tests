import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.primary1};
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.primary1};
`;
