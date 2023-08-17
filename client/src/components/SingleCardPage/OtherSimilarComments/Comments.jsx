import { FlexRow, FlexColumn } from "../../styles/Container.styled"
import { CommentsContainer, SingleCommentContainer } from "../styles"
import PropTypes from "prop-types";
import picOne from "../../../../public/images/founders/ceo1.png";
import picTwo from "../../../../public/images/founders/ceo2.png";
import picThree from "../../../../public/images/founders/ceo3.png";
import { Image } from "../../styles/Image.styled";

const comments = [
  {
    id: "suhciusdciuds",
    name: "Calatrava Manderi",
    time: "3 hours ago",
    image: picOne,
    comment: "Nice design"
  },
  {
  id: "ksjdncdnckjld",
  name: "Mary John",
  time: "3 hours ago",
  image: picTwo,
  comment: "I don't like this"
  },
  {
    id: "kdjscnkjdnckjwn",
    name: "Charles",
    time: "3 hours ago",
    image: picThree,
    comment: "Nice design"
  },
  {
    id: "ckcjvvskjnvdm",
    name: "Racheal",
    time: "3 hours ago",
    image: picOne,
    comment: "cool design yo"
  }
]

export default function Comments() {
  return(
    <CommentsContainer width="100%" align="flex-start">
      <h3>Comments</h3>

      <FlexRow width="100%" justify="flex-start">
        <FlexRow width="15%"></FlexRow>
        <textarea placeholder="Add comment ..."></textarea>
      </FlexRow>

      <FlexColumn align="flex-start" width="100%" gap="50px">
        {
          comments.map(comment => {
            return (
              <SingleComment
              key={comment.id}
              name={comment.name}
              comment={comment.comment}
              image={comment.image}
              time={comment.time}
              />
            )
          })
        }
      </FlexColumn>
    </CommentsContainer>
  )
}

function SingleComment({ name, comment, time, image }) {
  return(
    <SingleCommentContainer justify="flex-start" gap="20px">
      <FlexRow>
        <Image
        alt="user"
        height="70px"
        width="70px"
        bdradius="50%"
        src={image}
        />
      </FlexRow>

      <FlexColumn align="flex-start">
        <FlexRow>
          <span>{name}</span>
          <p>{time}</p>
        </FlexRow>
        <p>{comment}</p>
      </FlexColumn>
    </SingleCommentContainer>
  )
}

SingleComment.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  comment: PropTypes.string,
  time: PropTypes.string,
  image: PropTypes.string,
}