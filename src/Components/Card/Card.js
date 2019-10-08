import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    padding: 25px 12px 18px; 
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
`
const Company = styled.div`
    margin-bottom:0px;
    padding-bottom:0px;
    font-size:2rem;
`

const Title = styled.h2`
  color: #000;
  font-weight: 300;
  font-size: 1.3rem;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
const Date = styled.div`
  color: #000;
  font-weight: 300;
  margin: 6px 0;
  float:right;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`
const Description = styled.p`
  color: #000;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`

const Actions = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`
const Action = styled.button`
    margin: 0 5px;
    padding: 8px 14px;
    background: #fff;
    color: #000;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 10px;
    outline: 0;
    font-weight: 300;
    :hover {
        opacity: 0.8;
    }
`
const Card = props => (
  <StyledContainer>
    <Company>{props.company}</Company>
    <Title>
        {props.jobtitle}
        <Date>{props.date}</Date>
    </Title>
    <h4>{props.difficuilty}</h4>
    <Description>{props.description}</Description>
    <h3>CTC: {props.ctc}</h3>
    <h3>{props.cgpa} CGPA</h3>
    <Actions>
      {props.actions.map(({label}, index ) => (
        <Action key={index} onClick={label.onClick}>{label}</Action>
      ))}
    </Actions>
  </StyledContainer>
)
export default Card;