import React from 'react'
import styled from 'styled-components'
import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa'
import Card from '../Card/Card'

const StyledRoot = styled.div`
  padding: 50px 12px;
`
const StyledContainer = styled.div`
  max-width: 700px;
  width: 100%;
  margin: auto;
`
const ExperienceCard = () => {
  const date = new Date().toLocaleDateString()
  const onCommentClick = () => alert('You clicked comments')
  const onLikesClick = () => alert('You clicked comments')
  const onViewsClick = () => alert('You clicked comments')
  const buttons = [
    {
      label: (
        <>
          <FaCommentAlt /> 0 Comments
        </>
      ),
      onClick: onCommentClick,
    },
    {
      label: (
        <>
          <FaThumbsUp /> 242 Likes
        </>
      ),
      onClick: onLikesClick,
    },
    {
      label: (
        <>
          <FaRegEye /> 187288 Views
        </>
      ),
      onClick: onViewsClick,
    },
  ]

const data = {
    exp1: {
        id: "azxc",
        title: "This is my Experience",
        description: "Consuming apple with its peel.",
    },
    exp2: {
        id: "sdzx",
        title: "This is my second Experience",
        description: "Consuming apple with its peel.",
    }
}
  return (
    <ul>
        {Object.keys(data).map((exp) =>
            <li key={data[exp].id}>
                <StyledRoot>
                <StyledContainer>
                <Card
                    title={data[exp].title}
                    date={date}
                    description={data[exp].description}
                    actions={buttons}/>
                </StyledContainer>
                </StyledRoot>
            </li>
        )}
    </ul>
  );
}

export default ExperienceCard;