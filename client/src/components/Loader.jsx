import ReactLoading from 'react-loading';
import PropTypes from "prop-types";
 
const LoaderSpinner = ({ type, color, height, width }) => (
    <ReactLoading type={type} color={color} height={height} width={width} />
);

LoaderSpinner.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
}
 
export default LoaderSpinner;