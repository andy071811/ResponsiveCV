import { useState } from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import styled from "styled-components"
import { v4 as uuidv4 } from 'uuid';

const StyledWorkExperienceDiv = styled.div`
    background: #6d6b78;
    border-radius: 10px;
    border: 3px solid #070708;
    margin: 10px;
    padding: 20px 30px;
    color: #292826;
`;

const TitleDiv = styled.div`
    text-align: center;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 20px;
    letter-spacing: 8px;
    font-weight: bolder;

    &:hover {
        background: #9f9daf;
        transition-duration: 0.4s;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        letter-spacing: normal;
    }
`;

const Ul = styled.ul`
    background: #7e7c8b;
    border-radius: 10px;
    margin-top: 10px;
    padding: 10px 30px;
    list-style: none;
`;

const Div = styled.div`
    display: none;

    &.active {
        display: flex;
        flex-direction: column;
    }
`;

function WorkExperienceCard({ exp }) {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(prev => !prev);
    }

    return (
        <StyledWorkExperienceDiv key={uuidv4()} className={isActive ? 'active' : ''}>
            <TitleDiv onClick={handleClick}>
                <h1>{exp.company}</h1>
                <h3>{exp.role}</h3>
                <h4>{exp.dateStarted} - {exp.dateEnded}</h4>
                <h1 style={{ marginTop: '15px'}}>{isActive ? <FaArrowAltCircleUp /> : <FaArrowAltCircleDown />}</h1>
            </TitleDiv>
            <Div className={isActive ? 'active' : ''}>
                <p>{exp.summary}</p>
                <Ul>
                    {exp.responsibilities.map((responsibility, i) => <li key={i}> - {responsibility}</li>)}
                </Ul>  
            </Div>
        </StyledWorkExperienceDiv>
    )
}

export default WorkExperienceCard
