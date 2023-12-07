import styled from "styled-components";

export const BtnPrimary = styled.button`
  height: ${({ $height }) => $height || "40px"};
  width: ${({ $width }) => $width || "80px"};
  border: 1px solid ${({ theme, $border }) => $border || theme.colors.sec.seven};
  border-radius: ${({ $bdradius }) => $bdradius || "8px"};
  font-size: ${({ $font }) => $font || "21px"};
  cursor: pointer;
  color: ${({ $color }) => $color};
  background-color: ${({ $bg }) => $bg || "transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: ${({ $margin }) => $margin};

  &:hover {
    background-color: ${({ theme }) => theme.colors.sec.two};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.sec.three};
  }

   @media(max-width: ${({theme}) => theme.tablet}) {
    height: 40px;
    font-size: 16px;
    width: 80px;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    width: 100px;
    height: 50px;
    font-size: 18px;
  }
`

export const BtnSecondary = styled.button`
  height: ${({ $height }) => $height || "40px"};
  width: ${({ $width }) => $width || "80px"};
  border: 1px solid ${({ theme }) => theme.colors.sec.nine};
  border-radius: ${({ $bdradius }) => $bdradius || "10px"};
  // border: none;
  font-size: ${({ $font }) => $font || "21px"};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.btn};
  color: ${({ theme }) => theme.colors.sec.one};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:active {
    background-color: ${({ theme }) => theme.colors.prim.three};
  }

   @media(max-width: ${({theme}) => theme.tablet}) {
    height: 40px;
    font-size: 16px;
    width: 80px;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    width: 100px;
    height: 50px;
    font-size: 18px;
  }
`