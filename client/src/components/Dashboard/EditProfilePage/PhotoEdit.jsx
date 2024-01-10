import { FlexRow } from "../../styles/Container.styled";
import { Image } from "../../styles/Image.styled";
import { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { PhotoContainer } from "./styles";
import { MdEdit } from "react-icons/md";

export default function PhotoEdit() {
  const { user: { photo_url, full_name } } = useAuth();
  const [url, setUrl] = useState(photo_url);

  useEffect(() => {
    setUrl(photo_url)
  }, [photo_url]) 

  return (
    <PhotoContainer $height="fit-content" $width="fit-content">
      <Image
        src={url}
        alt={full_name}
        $height="200px"
        $width="200px"
        $bdradius="50%"
      />

      <FlexRow $width="fit-content">
        <label
        htmlFor="profile_picture">
          <MdEdit color="white" size="30px"/>
        </label>
        <input
          type="file"
          id="profile_picture"
          name="profile_picture"
        />
      </FlexRow>
    </PhotoContainer>
  )
}