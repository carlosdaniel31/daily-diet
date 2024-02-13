import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
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
  margin-bottom: 24px;
`