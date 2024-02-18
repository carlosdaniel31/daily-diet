import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

export const Container = styled.View`
  flex: 1;
  max-height: 50px;
  min-height: 50px;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const ContainerIcon = styled(TouchableOpacity)`
  position: absolute;
  left: 24px;
`
export const Icon = styled(MaterialIcons).attrs(({theme})=> ({
  size: 24,
  color: theme.COLORS.GRAY_800
}))``

export const Title = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
  color: ${({theme})=> theme.COLORS.GRAY_900};
`