import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  flex-direction: row;
  min-height: 56px;
  max-height: 56px;
  border: 1px solid ${({theme, type})=> type === "PRIMARY" ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_800};
  border-radius: 6px;
  background: ${({theme, type})=> type === "PRIMARY" ? theme.COLORS.GRAY_800 : theme.COLORS.GRAY_300};
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  gap: 12px;
`
export const Title = styled.Text<Props>`
  color: ${({theme, type})=> type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_800};
  font-size: ${({theme})=> theme.FONT_SIZE.SM}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
`
export const Icon = styled(Ionicons).attrs<Props>(({theme, type})=>({
  color: type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_800,
  size: 24
}))``