import { OtherSimilarCommentsSection } from "../styles";
import OtherViews from "./OtherViews";
import Comments from "./Comments";
import SimilarDesigns from "./SimilarDesigns";

export default function OtherSimilarComments() {
  return(
    <OtherSimilarCommentsSection>
      <OtherViews />
      <Comments />
      <SimilarDesigns />
    </OtherSimilarCommentsSection>
  )
}