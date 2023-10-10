 import { Image } from "../styles/Image.styled";
import blackCardImage from "../../../public/images/frames/blackcard.png";

export default function AboutHeader() {
  return (
    <header>
      <Image
        alt="black card"
        $width="99.8vw"
        $height="auto"
        src={blackCardImage}
       />
    </header>
  )
}