import { ExploreHeaderSection } from "./styles";
import { FlexColumn, FlexRow } from "../styles/Container.styled";
import { BtnSecondary } from "../styles/Button.styled";
import { FaCaretDown } from "react-icons/fa";
import { useRef, useContext, useState } from "react";
import { ExploreCardsContext } from "../../pages/ExplorePage";
import { AppContext } from "../../App";
import MessageDisplay from "../MessageDisplay";
import axios from "axios";

export default function ExploreHeader() {
  const categoriesMenu = useRef();
  const { setCardsInfo, setFetching } = useContext(ExploreCardsContext);
  const { serverURL } = useContext(AppContext);
  const [showingCardsText, setShowingCardsText] = useState("All Cards")
  const [ message, setMessage ] = useState(null);

  const handleOpenCategories = () => {
    categoriesMenu.current.classList.toggle("show");
  }

  async function getCategoryCardDesigns(e) {
    setFetching(true)
    const category = e.target.textContent.toLowerCase();
    setShowingCardsText(category)
    try {
      let url
      if (category === "all cards") 
        url = `${serverURL}/card-design`
      else
        url = `${serverURL}/card-design/category/${category}`

      
      const response = await axios.get(url)
      if(response.data.success === true) {
        setCardsInfo(response.data.data)
        setFetching(false)
      } else {
        setMessage(response.data.message);
        setFetching(false)
      }
    } catch (error) {
      setMessage(error.message);
      setFetching(false)
    }
  }

  return (
    <>
    {message && <MessageDisplay message={message} closeMessage={() => setMessage(null)}/>}
    <ExploreHeaderSection $padding="100px 90px" $gap="43px">
      <h1>Find Your Unique Design</h1>

      <p>Create your custom credit card.</p>

      <FlexRow $gap="0" $height="40px">
        <FlexColumn $padding="0 30px">
          <FlexRow onClick={handleOpenCategories}>
            {showingCardsText}
            <FaCaretDown 
            size="20px"
            />
          </FlexRow>
          <ul ref={categoriesMenu}>
            <li onClick={(e) => getCategoryCardDesigns(e)}>All cards</li>
            <li onClick={(e) => getCategoryCardDesigns(e)}>Anime</li>
            <li onClick={(e) => getCategoryCardDesigns(e)}>Nature</li>
            <li onClick={(e) => getCategoryCardDesigns(e)}>Cartoon</li>
            <li onClick={(e) => getCategoryCardDesigns(e)}>People</li>
          </ul>
        </FlexColumn>

        <input 
        type="search"
        placeholder="Search for anime, nature, cartoon or people"/>

        <BtnSecondary $width="120px" $bdradius="0">
          <i className="fa-solid fa-search"></i>
          Search
        </BtnSecondary>
      </FlexRow>
    </ExploreHeaderSection>
    </>
  )
}