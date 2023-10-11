import ReactLoading from 'react-loading';
import PropTypes from "prop-types";
import { FlexRow } from './styles/Container.styled';
import styled from "styled-components";

const LoaderContainer = styled(FlexRow)`
  width: fit-content;
  height: fit-content;
  position: absolute;
  bottom: o;
  top: 0;
  right: 0;
  left: 0;
`
 
const LoaderSpinner = ({ type, color, height, width }) => (
    <ReactLoading type={type} color={color} height={height} width={width} />
);

export function Spinner({type, color, height, width}) {
  return (
    <LoaderContainer>
      <LoaderSpinner type={type} color={color} height={height} width={width} />
    </LoaderContainer>
  )
}

LoaderSpinner.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
}

Spinner.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
}
 
export default LoaderSpinner;