import styled from "styled-components/native";

export const ContainerFade = styled.View`
  background: rgba(0, 0, 0, .25);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`
export const Container = styled.View`
  width: 100%;
  border-radius: 8px;
  background: ${({theme})=> theme.COLORS.GRAY_300};
  padding: 20px 24px;
`
export const Message = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
  color: ${({theme})=> theme.COLORS.GRAY_900};
  text-align: center;
  margin-bottom: 32px;
`
export const ContainerButtons = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 12px;
`