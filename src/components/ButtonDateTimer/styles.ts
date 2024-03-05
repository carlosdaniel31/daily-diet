import styled from "styled-components/native";
import { Pressable } from "react-native"

export const Container = styled(Pressable)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background: transparent;
  color: ${({theme})=> theme.COLORS.GRAY_900};
  font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
  border: 1px solid ${({theme})=> theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding: 14px;
`
export const Title = styled.Text``