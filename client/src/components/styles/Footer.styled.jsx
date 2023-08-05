import styled from "styled-components";

const StyledFooter = styled.footer`
  min-height: 500px;
  max-height: fit-content;
  background-color: ${({ theme }) => theme.colors.prim.ten};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 200px;
  color: #fff;

  & input {
    height: 100%;
    width: 250px;
    padding: 0 10px;
    box-sizing: border-box:
    font-size: 16px;
  }

  & button {
    border-radius: 0;
  }

  @media(max-width: ${({ theme }) => theme.tablet}) {
    padding: 40px 0;

    & > div:nth-child(1) {
      flex-direction: column;
    }

    & > div:nth-child(2) {
      flex-direction: column-reverse;
      padding: 10px 20px;
      gap: 100px;
    }

    & > div:nth-child(2) > div:nth-child(2) {
      gap: 10px;
      align-items: flex-start;
    }

    & input {
      height: 100%;
      width: 200px;
    }

    & button {
      height: 100%;
    }
  }
`

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  list-style: none;
  color: #fff;
  gap: 20px;

  @media(max-width: ${({ theme }) => theme.tablet}) {
    border-bottom: 2px solid #fff;
    width: 100%;
    padding: 0 0 20px 20px;
  }
`

export default StyledFooter;