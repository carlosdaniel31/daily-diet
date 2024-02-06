import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  border-radius: 8px;
  background: ${({theme})=> theme.COLORS.GRAY_400};
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin-bottom: 12px;
`
export const Value = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.XL}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
  margin-bottom: 8px;
`
export const Info = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.SM}px;
`