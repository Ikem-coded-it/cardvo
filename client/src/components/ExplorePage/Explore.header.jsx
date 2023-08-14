import ExploreHeaderSection from "./styles";
import { FlexColumn, FlexRow } from "../styles/Container.styled";
import { BtnSecondary } from "../styles/Button.styled";
import { FaCaretDown } from "react-icons/fa";
import { useRef } from "react";

export default function ExploreHeader() {
  const categoriesMenu = useRef();

  const handleOpenCategories = () => {
    categoriesMenu.current.classList.toggle("show");
  }

  return (
    <ExploreHeaderSection padding="100px 90px" gap="43px">
      <h1>Find Your Unique Design</h1>

      <p>Create your custom credit card.</p>

      <FlexRow gap="0" height="40px">
        <FlexColumn padding="0 30px">
          <FlexRow onClick={handleOpenCategories}>
            All Cards 
            <FaCaretDown 
            size="20px"
            />
          </FlexRow>
          <ul ref={categoriesMenu}>
            <li>All cards</li>
            <li>Anime</li>
            <li>Nature</li>
            <li>Cartoons</li>
            <li>People</li>
          </ul>
        </FlexColumn>

        <input 
        type="search"
        placeholder="Any design style on your mind?"/>

        <BtnSecondary width="120px" bdradius="0">
          <i className="fa-solid fa-search"></i>
          Search
        </BtnSecondary>
      </FlexRow>
    </ExploreHeaderSection>
  )
}