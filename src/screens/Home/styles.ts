import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, TouchableOpacity } from 'react-native'

export type TypeStyleIconDietProps = 'within' | 'outside' 

type Props = {
  type: TypeStyleIconDietProps
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: white;
  padding: 24px 24px 0;
  /* box-shadow: inset 0px -34px 18px -3px rgba(0,0,0,0.1); */
`
export const ContainerPercentage = styled.TouchableOpacity`
  width: 100%;
  background: ${({theme})=> theme.COLORS.GREEN_500};
  border-radius: 8px;
  padding: 20px 16px;
  position: relative;
  margin-bottom: 40px;
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
export const Icon = styled(MaterialIcons).attrs(({theme})=>({
  size: 24,
  color: theme.COLORS.GREEN_700
}))`
  position: absolute;
  right: 8px;
  top: 8px;
`
export const Title = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
  margin-bottom: 8px;
`
export const ListMeal = styled(ScrollView)`
  flex: 1;
  margin-top: 32px;
`
export const ContainerItem = styled(TouchableOpacity)`
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  flex-direction: row;
  border: 1px solid ${({theme})=> theme.COLORS.GRAY_500};
  border-radius: 6px;
  align-items: center;
  padding: 14px 12px;
  margin-bottom: 8px;
  gap: 10px;
`
export const CreatedAd = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.XS}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
`
export const Bar = styled.Text`
  color: ${({theme})=> theme.COLORS.GRAY_500};
  font-size: ${({theme})=> theme.FONT_SIZE.SM}px;
`
export const Item = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
  color: ${({theme})=> theme.COLORS.GRAY_700};
  flex: 1;
`
export const Type = styled(MaterialIcons).attrs<Props>(({theme, type})=>({
  color: type === 'within' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300,
  size: 16
}))``

export const HeaderSection = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
  margin-bottom: 8px;
  margin-top: 32px;
`