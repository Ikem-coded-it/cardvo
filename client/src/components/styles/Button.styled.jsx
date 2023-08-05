import styled from "styled-components";

export const BtnPrimary = styled.button`
  height: ${({ height }) => height || "40px"};
  width: ${({ width }) => width || "80px"};
  border: 1px solid ${({ theme }) => theme.colors.sec.seven};
  border-radius: 8px;
  font-size: 21px;
  cursor: pointer;
  color: ${({ color }) => color};

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
  height: ${({ height }) => height || "40px"};
  width: ${({ width }) => width || "80px"};
  border: 1px solid ${({ theme }) => theme.colors.sec.nine};
  border-radius: ${({ bdradius }) => bdradius || "10px"};
  border: none;
  font-size: 21px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.btn};
  color: ${({ theme }) => theme.colors.sec.one};

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