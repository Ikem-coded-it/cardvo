/* eslint-disable react-refresh/only-export-components */
import {  CardFrontView, CardBackView } from "../Card";
import { FlexColumn, FlexRow } from "../styles/Container.styled";
import { BtnPrimary, BtnSecondary } from "../styles/Button.styled";
import { FaHeart, FaBookmark } from "react-icons/fa6";
import { BsShare } from "react-icons/bs"; 
import { AiOutlineEdit } from "react-icons/ai"; 
import { FiDownload } from "react-icons/fi";
import { StyledViewOptionsSection } from "./styles";
import { useContext } from "react";
import { CardViewContext } from "../../Contexts/SingleCardPageContext";
import { AppContext } from "../../App";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import StyledLink from "../styles/Link.styled";
import LoaderSpinner from "../Loader";
import MessageDisplay from "../MessageDisplay";
import downloadDesign from "../../utils/designDownloader";
import SocialShare from "../SocialShare";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export default function ViewOptions() {
  const { cardDetails, view } = useContext(CardViewContext);
  const { id } = useParams();
  const [message, setMessage] = useState(null);
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  const [liked, setLiked] = useState(null);
  const [saved, setSaved] = useState(null);
  const [showSocials, setShowSocials] = useState(false);
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    const checkIfUserAlreadyLikedCard = async() => {
      try {
        const url = `/card-design/${id}/check-if-liked`;
        const response = await axiosPrivate.post(url, {userId: user.id});
        if (response.data.liked === true) {
          setLiked(true)
        } else {
          setLiked(false)
        }
      } catch (error) {
        setMessage(error.message)
      }
    }

    const checkIfUserAlreadySavedCard = async() => {
      try {
        const url = `/card-design/${id}/check-if-saved`;
        const response = await axiosPrivate.post(url, {userId: user.id});
        if (response.data.saved === true) {
          setSaved(true)
        } else {
          setSaved(false)
        }
      } catch (error) {
        setMessage(error.message)
      }
    }

    checkIfUserAlreadyLikedCard()
    checkIfUserAlreadySavedCard()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, user.id])

  useEffect(() => {
    const heartIcon = document.getElementById('heart');

    if (liked === true) {
      heartIcon.style.fill = "red";
    } else {
      heartIcon.style.fill = "grey";
    }
  }, [liked])

  useEffect(() => {
    const bookmarkIcon = document.getElementById('bookmark');

    if (saved === true) {
      bookmarkIcon.style.fill = "blue";
    } else {
      bookmarkIcon.style.fill = "grey";
    }
  }, [saved])

  const likeOrUnlikeCard = async() => {
    const url = `/card-design/${id}/toggle-like`;
    try {
      if(!user) return navigate("/auth/signin")
      const response = await axiosPrivate.post(url, {userId: user.id});

      if (response instanceof Error) {
        return setMessage(response.message)
      }

      if (response.data.success) {
        if (response.data.message === "Like created") return setLiked(true)
        if (response.data.message === "Like deleted") return setLiked(false)
      }
    } catch (error) {
      setMessage(error.message)
    }
  }

  const saveOrUnsaveCard = async() => {
    const url = `/card-design/${id}/toggle-save-card`;
    try {
      if(!user) return navigate("/auth/signin")
      const response = await axiosPrivate.post(url, {userId: user.id});

      if (response instanceof Error) {
        return setMessage(response.message)
      }

      if (response.data.success) {
        if (response.data.message === "Card saved") {
          setSaved(true)
          return setMessage("You've added this card design to your bookmarks");
        }
        if (response.data.message === "Card unsaved") {
          setSaved(false)
          return setMessage("You've removed this card design from your bookmarks");
        }
      }
    } catch (error) {
      setMessage(error.message)
    }
  }

  const displayedCard = document.getElementsByClassName("displayed-card")[0];

  return(
    <>
      {
        message && <MessageDisplay message={message} closeMessage={() => setMessage()}/>
      }
      <StyledViewOptionsSection>
        <FlexRow $height="430px" $width="100%">
          <FlexRow $height="100%" $flex="2">
            {/* 
            if view state is front, show front view card else show back view card
            */}
            {
              cardDetails ? (

                view === "front" ? (
                  <CardFrontView
                  cardNumberOne={cardDetails.card_number_one}
                  cardNumberTwo={cardDetails.card_number_two}
                  cardNumberThree={cardDetails.card_number_three}
                  cardNumberFour={cardDetails.card_number_four}
                  name={cardDetails.card_holder_name}
                  expiration={cardDetails.expiration}
                  color={cardDetails.color}
                  image={cardDetails.background_image}
                  $h3size="40px"
                  />
                ) : (
                  <CardBackView
                  cvv={cardDetails.cvv}
                  color={cardDetails.color}
                  image={cardDetails.background_image}
                  $psize="15px"
                  $electronicsize="20px"
                  $authorizesize="17px"
                  $blackheight="40px"
                  $cvvheight="25px"
                  $m_psize="11px"
                  $m_electronicsize="14px"
                  $m_authorizesize="14px"
                  $m_blackheight="30px"
                  $m_cvvheight="20px"
                  />
                )
                
              ) : (
                <LoaderSpinner type="spin" color="#375694" height={30} width={30}/>
              )
            }
          </FlexRow>

          <FlexColumn $height="100%" $flex="1" $gap="20px">
            <BtnSecondary $width="100%" $height="50px" onClick={()=>downloadDesign(displayedCard)}>
              <FiDownload/> Download
            </BtnSecondary>

            <StyledLink to={`/explore/card/${id}/edit`}>
              <BtnPrimary $width="100%" $height="50px">
                <AiOutlineEdit/> Edit
              </BtnPrimary>
            </StyledLink>

            <BtnPrimary $width="35%" $height="50px" onClick={saveOrUnsaveCard}>
              <FaBookmark id='bookmark'/>
            </BtnPrimary>

            <BtnPrimary $width="35%" $height="50px" id='like-btn' onClick={likeOrUnlikeCard}>
              <FaHeart id="heart"/>
            </BtnPrimary>

            <BtnPrimary $width="35%" $height="50px" onClick={()=>setShowSocials(true)}>
              <BsShare/> Share
            </BtnPrimary>
          </FlexColumn>
        </FlexRow>

        {
          showSocials && <SocialShare cardId={id} close={()=>setShowSocials(false)}/>
        }
      </StyledViewOptionsSection>
    </>  
  )
}