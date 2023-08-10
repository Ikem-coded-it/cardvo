import { FlexRow, FlexColumn, Container } from "../styles/Container.styled";
import { BtnPrimary, BtnSecondary } from "../styles/Button.styled";
import PropTypes from "prop-types";
import styled from "styled-components";


const ControlPanelContainer = styled(FlexColumn)`
  border: 1px solid ${({ theme }) => theme.colors.sec.five};
`

const BackBtnContainer = styled(FlexRow)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.sec.five};
  & button {
    border: none;
  }
`

const Controls = styled(FlexColumn)`
  & input[type="file"] {
    height: 40px;
  }

  & input[type="text"] {
    height: 30px;
    box-sizing: border-box;
    padding-left: 10px;
  }
`

const NumberInputContainer = styled(FlexRow)`
  & input {
    width: 50px;

    &::-webkit-inner-spin-button {
      display: none;
    }
  }
`

const ColorsGrid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 30px);
  grid-auto-rows: 30px;
  gap: 10px;

  & div {
    cursor: pointer;
  }
`

export default function ControlPanel({ designDispatch }) {

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = (e) => {
      const action = {
        type: "changed_image",
        newImage: e.target.result,
      }

      designDispatch(action);
    }
    reader.readAsDataURL(file)
  }

  const handleNumberChange = (e) => {
    const id = e.target.getAttribute('id');

    const value = e.target.value.length <= 0 ? "0000" : e.target.value // set to default when user erases input

    switch(id) {
      case "number-1": {
        console.log(value)
        const action = {
          type: "changed_number",
          newNumberOne: value,
        }
        return designDispatch(action);
      }

      case "number-2": {
        const action = {
          type: "changed_number",
          newNumberTwo: value,
        }
        return designDispatch(action);
      }

      case "number-3": {
        const action = {
          type: "changed_number",
          newNumberThree: value,
        }
        return designDispatch(action);
      }

      default: {
        const action = {
          type: "changed_number",
          newNumberFour: value,
        }
        return designDispatch(action);
      }
    }
  }

  const handleNameChange = (e) => {
    let newName = e.target.value.toUpperCase();
    const action = {
      type: "changed_name",
      newName
    }

    designDispatch(action);
  }

  const handleChangeExpirationDate = (e) => {
    let expiration_date = e.target.value;
    const expiration_date_arr =  expiration_date.split("-")
    const yearArr = expiration_date_arr[0].split('')
    const doubleDigitYear = yearArr[2] + yearArr[3]
    const month = expiration_date_arr[1]
    expiration_date = month + '/' + doubleDigitYear;

    const action = {
      type: "changed_date",
      newExpirationDate: expiration_date
    }

    designDispatch(action);
  }

  return (
    <ControlPanelContainer 
    width="25%"
    height="100%"
    justify="flex-start"
    padding="0 20px"
    >
      <BackBtnContainer height="10%" width="100%">
        <BtnPrimary width="100%" >
          <i className="fa-solid fa-arrow-left"></i>
          Edit Properties
        </BtnPrimary>
      </BackBtnContainer>

      <Controls width="100%" gap="30px">

        {/* Color control */}
        <FlexColumn width="100%">
          <FlexRow width="100%" justify="space-between">
            <FlexRow  gap="20px">
              <i className="fa-solid fa-palette"></i>
              Colors
            </FlexRow>
            <i className="fa-solid fa-caret-down"></i>
          </FlexRow>
          <ColorsGrid width="100%">
            {
              colorPalette.map((color, index) => {
                return <Color
                  designDispatch={designDispatch}
                  key={index}
                  hexCode={color}
                />
              })
            }
          </ColorsGrid>
        </FlexColumn>

        {/* Image control */}
        <FlexColumn width="100%">
          <FlexRow width="100%" justify="space-between">
            <FlexRow gap="20px">
              <i className="fa-solid fa-file-image"></i>
              Image
            </FlexRow>
            <i className="fa-solid fa-caret-down"></i>
          </FlexRow>
           
          <FlexRow>
            <input 
            type="file" 
            accept="image/*" 
            name="card-background-image"
            onChange={(e) => handleImageUpload(e)}
            />
          </FlexRow>
        </FlexColumn>

        {/* Text control */}
        <FlexColumn width="100%">
          <FlexRow width="100%" justify="space-between">
            <FlexRow gap="20px">
              <i className="fa-solid fa-edit"></i>
              Text
            </FlexRow>
            <i className="fa-solid fa-caret-down"></i>
          </FlexRow>
           
          <NumberInputContainer width="100%" justify="flex-start">
            <input
            maxLength={4}
            type="text" 
            placeholder="0000" 
            id="number-1" 
            onChange={(e) => handleNumberChange(e)}/>

            <input 
            maxLength={4}
            type="text"
            placeholder="0000" 
            id="number-2" 
            onChange={(e) => handleNumberChange(e)}/>

            <input 
            maxLength={4}
            type="text"
            placeholder="0000" 
            id="number-3" 
            onChange={(e) => handleNumberChange(e)}/>

            <input 
            maxLength={4}
            type="text"
            placeholder="0000" 
            id="number-4" 
            onChange={(e) => handleNumberChange(e)}/>
          </NumberInputContainer>

          <FlexRow justify="flex-start" width="100%">
            <input 
            type="text" 
            placeholder="YOUR NAME HERE" 
            maxLength={22} 
            onChange={(e) => handleNameChange(e)} />
          </FlexRow>
          <FlexRow width="100%" justify="space-between">
            <input type="text" maxLength={3}  placeholder="cvv"/>
            <input type="date" onChange={(e) => handleChangeExpirationDate(e)} />
          </FlexRow>
        </FlexColumn>

        {/* Side control */}
        <FlexColumn width="100%">
          <BtnSecondary 
          width="100%" 
          bdradius="5px"
          height="50px">
            Add to my collection
          </BtnSecondary>
          <BtnPrimary 
          width="100%"
          height="50px">
            Download
          </BtnPrimary>
        </FlexColumn>
      </Controls>
    </ControlPanelContainer>
  )
}

function Color({ hexCode, designDispatch }) {
  function handleChangeColor() {
    const action = {
      type: "changed_color",
      newColor: hexCode,
    }

    designDispatch(action);
  }

  return <Container 
  bg={hexCode} 
  bdradius="50%"
  onClick={handleChangeColor}
  />
}

ControlPanel.propTypes = {
  designDispatch: PropTypes.func
}

Color.propTypes = {
  hexCode: PropTypes.string,
  designDispatch: PropTypes.func
}

const colorPalette = [
  "#0891b2",
  "#dc2626",
  "#fde047",
  "#84cc16",
  "#7c3aed",
  "#fb923c",
  "#22d3ee",
  "#854d0e",
  "#d946ef",
  "#334155",
  "#171717",
  "#030712"
]