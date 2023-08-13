import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  font-size: ${({ font }) => font || "15px"};
  background-color: ${({ bg }) => bg};
  flex: ${({ flex }) => flex};
  border-radius: ${({ bdradius }) => bdradius};
  color: ${({ color }) => color};
`

export const FlexRow = styled(Container)`
  display: flex;
  gap: ${({ gap }) => gap || "10px"};
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
`

export const FlexColumn = styled(FlexRow)`
  flex-direction: column;
`