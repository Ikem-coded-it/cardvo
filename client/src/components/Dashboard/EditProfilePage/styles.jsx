import styled from "styled-components";
import { Field } from 'formik';
import { FlexRow } from "../../styles/Container.styled";

export const StyledEditProfileForm = styled.form`
  height: 100%;
  width: 100%;
  border-radius: 40px;
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
    & img {
      height: 120px;
      width: 120px;
    }
  }
`;

export const StyledEditInput = styled(Field)`
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