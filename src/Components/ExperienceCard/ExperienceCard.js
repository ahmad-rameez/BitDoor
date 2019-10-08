import React from 'react'
import styled from 'styled-components'
import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa'
import Card from '../Card/Card'

const StyledRoot = styled.div`
    padding: 15px 12px;  
`
const StyledContainer = styled.div`
    max-width: 700px;
    width: 100%;
    margin: auto;
`
const UnorderedList = styled.ul` 
    padding: 0px 10px;
    margin: 0px 5px;
    width: 600px;
`
const ListItem = styled.li`
    list-style: none;
    width:100%;
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
        jobTitle: "Associate Software Developer",
        company: "Optum",
        difficuilty: "Medium",
        ctc: 7.15,
        cgpa: 7,
        description: "The experience was somewhat okay i feel good about myself, The experience was somewhat okay i feel good about myself,The experience was somewhat okay i feel good about myself, The experience was somewhat okay i feel good about myself, The experience was somewhat okay i feel good about myself",
    },
    exp2: {
        id: "sdzx",
        jobTitle: "Trainee Descision Scientist",
        company: "MuSigma",
        difficuilty: "Easy",
        ctc: 21,
        cgpa: 6,
        description: "Musigma is a company where we need to do the maths so that we can do math all the time",
    },
    exp3: {
        id: "sd6hg",
        jobTitle: "Software Developer",
        company: "HashedIn",
        difficuilty: "Hard",
        ctc: 7.15,
        cgpa: 7,
        description: "The experience was somewhat okay i feel good about myself, should need to focus on design problems. And focus on basics should be there to increase the cance of selection",
    }
}
  return (
    <UnorderedList>
        {Object.keys(data).map((exp) =>
            <ListItem key={data[exp].id}>
                <StyledRoot>
                <StyledContainer>
                <Card
                    jobtitle={data[exp].jobTitle}
                    company={data[exp].company}
                    difficuilty={data[exp].difficuilty}
                    ctc = {data[exp].ctc}
                    cgpa = {data[exp].cgpa}
                    date={date}
                    description={data[exp].description}
                    actions={buttons}/>
                </StyledContainer>
                </StyledRoot>
            </ListItem>
        )}
    </UnorderedList>
  );
}

export default ExperienceCard;