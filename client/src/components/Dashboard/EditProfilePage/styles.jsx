import styled from "styled-components";
import { FlexRow, FlexColumn } from "../../styles/Container.styled";

export const StyledProfileContainer = styled(FlexColumn)`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.sec.one};
  padding: 20px;
  box-sizing: border-box; 
  align-items: flex-start;
  gap: 20px;
  box-shadow: 7px 7px 20px ${({theme}) => theme.colors.prim.three};

  @media(max-width: ${({theme}) => theme.mobile}) {
    border-radius: 10px;
    box-shadow: none;
    padding: 0;
  }
`

export const ProfileNav = styled.nav`
  height: 10%;
  width: 100%;
  border: 2px solic red;

  & ul {
    display: flex;
    height: 100%;
    gap: 20px;

    > li {
      list-style: none;

      > a {
        font-weight: bold;

        @media(max-width: ${({theme}) => theme.mobile}) {
          font-size: 15px;
        }
      }
    }
  }
`

export const StyledEditProfileForm = styled.form`
  height: 90%;
  width: 100%;
  background-color: ${({theme}) => theme.colors.sec.one};
  padding: 20px;
  box-sizing: border-box; 
  display: flex;
  align-items: flex-start;
  gap: 40px;

  & > div:last-child {

    & label {
      font-size: 20px;
    }

    & div:nth-child(3) {
      & div {
        & input {
          height: 100%;
          font-size: 17px;
          padding: 0 5px;
          box-sizing: border-box;
        }
      }
    }
  }

  @media(max-width: 500px) {
    flex-direction: column;
    padding: 10px;
    border-radius: 20px;

    & > div:first-child {
      height: 30%;
      width: 100%;
    }

    & > div:last-child {
      height: 70%;
      width: 100%;
      gap: 10px;

      & label {
        font-size: 15px;
      }
    }
  }
`;

export const PhotoContainer = styled(FlexRow)`
  position: relative;
  margin-top: 20px;

  & > div {
    position: absolute;
    bottom: 10px;
    right: 0;

    & label {
      cursor: pointer;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background-color: #2c4577;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & input {
      display: none;
    }
  }

  @media(max-width: ${({theme}) => theme.tablet}) {
    & img {
      height: 150px;
      width: 150px;
    }
  }

  @media(max-width: ${({theme}) => theme.mobile}) {
    margin-top: 0;
    & img {
      height: 170px;
      width: 170px;
    }
  }
`;

export const StyledEditInput = styled.input`
  border: 1px solid ${({theme}) => theme.colors.prim.three};
  border-radius: 5px;
  padding: 0 5px;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  font-size: 17px;

  @media(max-width: ${({theme}) => theme.mobile}) {
    height: 40px;
    font-size: 15px;
  }
`;

export const ChangePasswordFormContainer = styled(FlexRow)`
  & form {
    padding: 10px 10px;
    border-radius: 5px;
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({theme}) => theme.colors.sec.three};

    & p {
      color: red;
    }

    @media(max-width: 750px) {
      width: 70%;

      & button {
        width: 200px;
      }
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
      width: 100%;
      background-color: ${({theme}) => theme.colors.sec.one};
    }
  }
`