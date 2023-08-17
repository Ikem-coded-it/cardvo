import { StyledContactUsCustomer } from "./styles";
import { PiCaretDownBold } from "react-icons/pi";

export default function ContactUsCustomerService() {
  return(
    <StyledContactUsCustomer>
      <h2>Customer service frequently asked questions</h2>

      <ul>
        <li>
          How do I contact the customer service when I am not in the country?
          <PiCaretDownBold />
        </li>
        <li>
          How often are the customer service representatives available?
          <PiCaretDownBold />
        </li>
        <li>
          Does Cardvo monitor phone calls?
          <PiCaretDownBold />
        </li>
        <li>
          How do I initiate a live chat?
          <PiCaretDownBold />
        </li>
        <li>
          Can i contact a Cardvo representative online?
          <PiCaretDownBold />
        </li>
      </ul>
    </StyledContactUsCustomer>
  )
}