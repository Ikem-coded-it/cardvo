import { FlexRow } from "../../styles/Container.styled";
import { Image } from "../../styles/Image.styled";
import { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { PhotoContainer } from "./styles";
import { MdEdit } from "react-icons/md";
import PropTypes from "prop-types";

export default function PhotoEdit({ setFile }) {
  const { user: { photo_url, full_name } } = useAuth();
  const [url, setUrl] = useState(photo_url);
  const [dataURL, setDataURL] = useState(null);

  // remove dataURL display and display url returned from server as image src
  useEffect(() => {
    setDataURL(null)
    setFile(null)
    setUrl(photo_url)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photo_url]);
  
  const handleImageUpload = (file) => {
    setFile(file)
    const reader = new FileReader()

    reader.onload = (e) => {
      setDataURL(e.target.result);
    }
    reader.readAsDataURL(file)
  }

  return (
    <PhotoContainer $height="fit-content" $width="fit-content">
      <Image
        src={
          dataURL ? dataURL : url
        }
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
          onChange={(e) => handleImageUpload(e.target.files[0])}
        />
      </FlexRow>
    </PhotoContainer>
  )
}

PhotoEdit.propTypes = {
  setFile: PropTypes.func,
  file: PropTypes.any,
  setButtonStatus: PropTypes.func
}