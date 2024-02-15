import styled from "styled-components/native"
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${({theme})=> theme.COLORS.GRAY_500};
  padding: 24px 0 0 0;
`
export const ContainerDetails = styled.View`
  flex: 1;
  border-radius: 20px;
  background: ${({ theme }) => theme.COLORS.GRAY_300};
  /* background-color: aqua; */
  position: fixed;
  top: 32px;
  padding: 33px 24px;
`
export const Meal = styled.Text`
  font-size: 20px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
  color: ${({ theme })=> theme.COLORS.GRAY_900};
  margin-bottom: 8px;
`
export const Description = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
  color: ${({ theme })=> theme.COLORS.GRAY_800};
  margin-bottom: 24px;
`
export const LabelDateTime = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.SM}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
  color: ${({ theme })=> theme.COLORS.GRAY_900};
  margin-bottom: 8px;
`
export const DateTime = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
  color: ${({ theme })=> theme.COLORS.GRAY_800};
  margin-bottom: 24px;
`
export const ContainerStateDiet = styled.View`
  flex-direction: row;
  align-items: center;
  background: ${({ theme })=> theme.COLORS.GRAY_400};
  padding: 8px 16px;
  border-radius: 999px;
  align-self: flex-start;
`
export const TextStateDiet = styled.Text`
  color: ${({ theme })=> theme.COLORS.GRAY_900};
  font-size: ${({ theme })=> theme.FONT_SIZE.SM}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
`
export const Dot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: ${({ theme })=> theme.COLORS.GREEN_700};
  margin-right: 8px;
`
export const ContainerButtons = styled.View`
  flex: 1;
  gap: 9px;
  padding-bottom: 20px;
  justify-content: flex-end;
`