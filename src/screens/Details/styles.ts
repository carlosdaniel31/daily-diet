import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${({theme})=> theme.COLORS.GREEN_300};
  padding: 48px 0 0 0;
  position: relative;
`
export const Percentage = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.FULL}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
  text-align: center;
`
export const InfoPercentage = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.SM}px;
  text-align: center;
`
export const ContainerInfo = styled.View`
  flex: 1;
  border-radius: 20px;
  background: ${({theme})=> theme.COLORS.GRAY_300};
  position: fixed;
  top: 32px;
  padding: 33px 24px;
`
export const Icon = styled(MaterialIcons).attrs(({theme})=> ({
  size: 24,
  color: theme.COLORS.GREEN_700
}))`
  position: absolute;
  left: 24px;
  top: 52px;
`
export const Title = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.SM}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
  text-align: center;
  margin-bottom: 23px;
`
export const Box = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 12px;
`