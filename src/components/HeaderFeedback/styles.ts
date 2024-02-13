import styled from "styled-components/native";

export type Color = 'GREEN_700' | 'RED_700'

type ColorTypeProp = {
  color: Color;
}

export const Container = styled.View`
  align-items: center;
  margin-bottom: 40px;
`
export const Title = styled.Text<ColorTypeProp>`
  font-size: ${({theme})=> theme.FONT_SIZE.XL}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
  color: ${({theme, color})=> theme.COLORS[color]};
  margin-bottom: 8px;
`
export const Description = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
  color: ${({theme})=> theme.COLORS.GRAY_900};
  text-align: center;
`