import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context"

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: white;
  padding: 64px 24px 0;
`
export const Logo = styled.Image`
  width: 100px;
  height: 50px;
  margin-bottom: 81px;
  align-self: center;
`
export const Text = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
  text-align: center;
`
export const Form = styled.View`
  flex: 1;
  margin-top: 32px;
`
export const Label = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
`