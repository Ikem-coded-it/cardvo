import { FlexRow, FlexColumn } from "../../styles/Container.styled"
import { BtnSecondary } from "../../styles/Button.styled";
import { CommentsContainer, SingleCommentContainer, CommentForm } from "../styles"
import PropTypes from "prop-types";
import picOne from "../../../../public/images/founders/ceo1.png";
import picTwo from "../../../../public/images/founders/ceo2.png";
// import picThree from "../../../../public/images/founders/ceo3.png";
import { Image } from "../../styles/Image.styled";
import { BtnPrimary } from "../../styles/Button.styled";
import { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useAuth from "../../../hooks/useAuth";
import MessageDisplay from "../../MessageDisplay";
import LoaderSpinner from "../../Loader";

const mockComments = [
  {
    id: "suhciusdciuds",
    full_name: "Calatrava Manderi",
    created_at: "3 hours ago",
    photo_url: picOne,
    comment: "Nice design"
  },
  {
  id: "ksjdncdnckjld",
  full_name: "Mary John",
  created_at: "3 hours ago",
  photo_url: picTwo,
  comment: "I don't like this"
  },
  // {
  //   id: "kdjscnkjdnckjwn",
  //   full_name: "Charles",
  //   created_at: "3 hours ago",
  //   photo_url: picThree,
  //   comment: "Nice design"
  // },
  // {
  //   id: "ckcjvvskjnvdm",
  //   full_name: "Racheal",
  //   created_at: "3 hours ago",
  //   photo_url: picOne,
  //   comment: "cool design yo"
  // }
]

export default function Comments() {
  const [fetching, setFetching] = useState(false);
  const [comments, setComments] = useState(null);
  const [comment, setComment] = useState('');
  const [nextSetNumber, setNextSetNumber] = useState(0);
  const { id } = useParams();
  const [message, setMessage] = useState(null);
  const commentsContainer = useRef();
  const axiosPrivate = useAxiosPrivate();
  const { user } = useAuth();

  useEffect(() => {
    async function fetchFirstSetOfComments() {
      setFetching(true)
      try {
        const response = await axiosPrivate.get(`/comment/${id}/${nextSetNumber}`);
        if(response instanceof Error) {
          setMessage(response.message)
        }
        if (response.data.success === false) {
          setFetching(false)
          return setMessage(response.data.message)
        }

        if (response.data.success === true) {
          const newComments = response.data.data;
          if (newComments.length === 0) {
            setFetching(false)
            return setComments(mockComments);
          }
          setNextSetNumber(newComments.length)
          setFetching(false)
          return setComments(newComments)
        }
      } catch (error) {
        if(error.response?.data?.message === "No comments available") {
          return setComments(mockComments);
        }
        setMessage(error.message)
        setFetching(false)
      }
    }

    fetchFirstSetOfComments()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function getNextSetOfComments() {
    setFetching(true)
    try {
      const response = await axiosPrivate.get(`/comment/${id}/${nextSetNumber}`);
      if(response instanceof Error) {
        setMessage(response.message)
        return setFetching(false)
      }

      if (response.data.success === false) {
        setFetching(false)
        return setMessage(response.data.message)
      }

      if (response.data.success === true) {
        const newComments = response.data.data
        if (newComments.length === 0) return setFetching(false)
        setNextSetNumber(comments.length + newComments.length)
        setFetching(false)
        return setComments(prev => [...prev, ...newComments])
      }
    } catch (error) {
      if(error.response?.data?.message === "No comments available") {
        return setComments(mockComments);
      }
      setMessage(error.message)
      setFetching(false)
    }
  }
  
  async function postComment(e) {
    e.preventDefault();
    if(comment === '') return;
    try {
      const data = {
        comment,
        userId: user.id,
        cardDesignId: id
      }
      const response = await axiosPrivate.post('/comment/post', data);
      if (response.status === 201) {
        setComments(prev => {
          const newComment =  response.data.postedComment;
          newComment.photo_url = user.photo_url;
          newComment.full_name = user.full_name;

          return [newComment, ...prev];
        })
        return setComment('');
      }
    } catch (error) {
      return setMessage(error.message)
    }
  }

  return(
    <>
    {
      message && <MessageDisplay message={message} closeMessage={() => setMessage(null)}/>
    }
    <CommentsContainer $width="100%" $align="flex-start">
      <h3>Comments</h3>

      <FlexRow $width="100%" $justify="flex-start">
        <CommentForm onSubmit={postComment}>
          <textarea
          name="comment"
          placeholder="Add comment ..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}></textarea>

          <BtnSecondary
          type="submit"
          $height="50px"
          $width="15%"
          $bdradius="0">
            Post
          </BtnSecondary>
        </CommentForm>
      </FlexRow>

      <FlexColumn
      ref={commentsContainer}
      $align="flex-start" 
      $width="100%" 
      $height="500px"
      $justify="flex-start"
      $gap="50px">
        {
          comments && comments.length > 0 && (
            comments.map(comment => {
              return (
                <SingleComment
                key={comment.id}
                name={comment.full_name}
                comment={comment.comment}
                image={comment.photo_url}
                time={comment.created_at}
                />
              )
            })
          )
        }

        <FlexRow
        $width="100%"
        $height="40px">
          {
            fetching === true && <LoaderSpinner height={40} width={100} type="bubbles" color="#2c4577"/>
          }
        </FlexRow>
      </FlexColumn>

      <BtnPrimary
      onClick={getNextSetOfComments}
      $width="100%" 
      $bdradius="0" 
      $bg={({ theme }) => theme.colors.sec.two}>
        See more
      </BtnPrimary>
    </CommentsContainer>
    </>
  )
}

function SingleComment({ name, comment, time, image }) {
  return(
    <SingleCommentContainer $justify="flex-start" $gap="20px">
      <FlexRow>
        <Image
        alt="user"
        $height="70px"
        $width="70px"
        $bdradius="50%"
        src={image}
        />
      </FlexRow>

      <FlexColumn $align="flex-start">
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