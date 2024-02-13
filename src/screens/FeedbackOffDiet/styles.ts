import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${({theme})=> theme.COLORS.GRAY_300};
  align-items: center;
  justify-content: center;
  padding: 0 32px;
`
export const Image = styled.Image`
  width: 220px;
  height: 288px;
  margin-bottom: 40px;
`