import styled from "styled-components/native";
import { Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

export type ColorType = 'RED_700' | 'GREEN_700'
export type BackgroundType = 'RED_300' | 'GREEN_300'

type ButtonTypeDietProps = {
  color: ColorType
  background: BackgroundType
  isActive: boolean
}

export const Container = styled(Pressable)<ButtonTypeDietProps>`
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  background: ${({theme, isActive, background})=> 
    isActive ? theme.COLORS[background] : theme.COLORS.GRAY_400};
  border: 1px solid ${({theme, isActive, color})=> 
    isActive ? theme.COLORS[color] : theme.COLORS.WHITE};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
export const Title = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.SM}px;
  color: ${({theme})=> theme.COLORS.GRAY_900};
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
`
export const Icon = styled(MaterialIcons).attrs(({theme})=> ({
  size: 24,
  color: theme.COLORS.GREEN_500
}))