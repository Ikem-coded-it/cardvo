// import { FlexRow } from "../styles/Container.styled";
import styled from "styled-components";
import { motion } from "framer-motion";

export const SocialShareButtonsContainer = styled(motion.div)`
  width: 100vw;
  height: 100px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 20;

  & > div {
    background-color: ${({theme}) => theme.colors.sec.three};
    width: 300px;
    height: 100%;
    position: relative;

    & > svg {
      position: absolute;
      top: 6px;
      right: 10px;
    }
  }
`