import styled from "styled-components/native";
import { TypeStyleIconDietProps } from '../../screens/Home/styles'

type Props = {
  type: TypeStyleIconDietProps
}

export const Container = styled.View<Props>`
  flex: 1;
  border-radius: 8px;
  background: ${({theme, type})=> type === 'within' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
  justify-content: center;
  align-items: center;
  padding: 16px;
`
export const Value = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.XL}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
  margin-bottom: 8px;
`
export const Info = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.SM}px;
  text-align: center;
`