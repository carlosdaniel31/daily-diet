import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, ScrollView } from 'react-native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${({theme})=> theme.COLORS.GRAY_500};
  padding: 24px 0 0 0;
`
export const Form = styled(ScrollView)`
  flex: 1;
  border-radius: 20px;
  background: ${({ theme }) => theme.COLORS.GRAY_300};
  top: 32px;
  padding: 33px 24px;
`
export const Label = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.SM}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
  color: ${({ theme })=> theme.COLORS.GRAY_800};
  margin-bottom: 4px;
`
export const TextArea = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 90px;
  background: transparent;
  color: ${({theme})=> theme.COLORS.GRAY_900};
  font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
  border: 1px solid ${({theme})=> theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding: 14px;
  margin-bottom: 24px;
`
export const ContainerDateHour = styled.View`
  width: 100%;
  min-height: 84px;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 24px;
`
export const Box = styled.View`
  flex: 1;
  flex-direction: column;
`
export const ContainerButtonTypeDiet = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 8px;
`