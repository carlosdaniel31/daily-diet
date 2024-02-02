import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({theme})=> theme.COLORS.GRAY_900};
`
export const LoadIndicator = styled.ActivityIndicator.attrs({color: 'green'})``