import { ExploreHeaderSection, StyledSearchForm } from "./styles";
import { FlexColumn, FlexRow } from "../styles/Container.styled";
import { BtnSecondary } from "../styles/Button.styled";
import { FaCaretDown } from "react-icons/fa";
import { useRef, useContext, useState } from "react";
import { ExploreCardsContext } from "../../pages/ExplorePage";
import { useSearchParams } from "react-router-dom";
import MessageDisplay from "../MessageDisplay";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export default function ExploreHeader() {
  const categoriesMenu = useRef();
  const { setCardsInfo, setFetching } = useContext(ExploreCardsContext);
  const [showingCardsText, setShowingCardsText] = useState("All Cards")
  const [ message, setMessage ] = useState(null);
  const axiosPrivate = useAxiosPrivate();
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOpenCategories = () => {
    categoriesMenu.current.classList.toggle("show");
  }

  function updateSearchParams(e) {
    e.type === "submit" && e.preventDefault()
    const query = e.target.category ? e.target.category.value : e.target.textContent.toLowerCase();
    const availableCategories = ['anime', 'nature', 'cartoon', 'people', 'all cards']
    if (!availableCategories.includes(query)) {
      setMessage('This category is not available. Please search for "anime", "cartoon", "nature" or "people".');
      return setFetching(false)
    }
    setSearchParams({category: query})
    getCategoryCardDesigns(query)
  }

  async function getCategoryCardDesigns(query) {
    setShowingCardsText(query)
    try {
      let url
      if (query === "all cards") 
        url = `/card-design`
      else
        url = `/card-design/category/${query}`

      
      const response = await axiosPrivate.get(url)
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
            <li onClick={(e) => updateSearchParams(e)}>All cards</li>
            <li onClick={(e) => updateSearchParams(e)}>Anime</li>
            <li onClick={(e) => updateSearchParams(e)}>Nature</li>
            <li onClick={(e) => updateSearchParams(e)}>Cartoon</li>
            <li onClick={(e) => updateSearchParams(e)}>People</li>
          </ul>
        </FlexColumn>

        <StyledSearchForm onSubmit={updateSearchParams}>
          <input 
          type="search"
          name="category"
          placeholder="Search for anime, nature, cartoon or people"/>

          <BtnSecondary type="submit" $width="120px" $bdradius="0">
            <i className="fa-solid fa-search"></i>
            Search
          </BtnSecondary>
        </StyledSearchForm>
      </FlexRow>
    </ExploreHeaderSection>
    </>
  )
}