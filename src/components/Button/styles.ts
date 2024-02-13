import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  background: ${({theme})=> theme.COLORS.GRAY_800};
  justify-content: center;
  align-items: center;
  gap: 12px;
`
export const Title = styled.Text`
  color: ${({theme})=> theme.COLORS.WHITE};
  font-size: ${({theme})=> theme.FONT_SIZE.SM}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
`
export const Icon = styled(MaterialIcons).attrs(({theme})=>({
  color: theme.COLORS.WHITE,
  size: 24
}))``