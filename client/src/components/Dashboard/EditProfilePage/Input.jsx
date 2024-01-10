import { StyledEditInput } from "./styles";
import { FlexColumn } from "../../styles/Container.styled";
import PropTypes from "prop-types";

export default function EditInput({label, onChange, onBlur, value, type}) {
  return (
    <FlexColumn $align="flex-start" $width="100%">
      <label>{label}</label>
      <StyledEditInput
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      type={type}
      />
    </FlexColumn>
  )
}

EditInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
}