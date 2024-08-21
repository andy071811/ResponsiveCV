import styled from "styled-components"
import { useEffect, useState } from "react";
import ListOfSkillsCard from "../components/ListOfSkillsCard";
import Error from "../components/Error";
import { FaGithub, FaLinkedin } from "react-icons/fa6";


const StyledHomepage = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: #292826;

    @media (max-width: 768px) {
        grid-template-columns: auto;
        grid-template-rows: auto;
    }
`;

const NameDiv = styled.div`
    grid-column: 1 / 1;
    grid-row: 1 / 3;
    margin: 10px;
    text-align: center;
    letter-spacing: 1px;
    background: #6d6b78;
    border-radius: 10px;
    border: 3px solid #070708;
    padding: 20px 30px;

    @media (max-width: 768px) {
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
    }
`;

const H4 = styled.h4`
    margin-top: 5px;
`

const Img = styled.img`
    height: 45vh;
    margin-top: 50px;
    border-radius: 2px;
    border: 3px solid #7e7c8b;

    @media (max-width: 768px) {
        display: none;
    }
`;

const IntroDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    grid-column: 2 / 3;
    grid-row: 1;
    margin: 10px;
    padding: 10px;
    background: #6d6b78;
    border-radius: 10px;
    border: 3px solid #070708;
    text-align: center;

    @media (max-width: 768px) {
        grid-column: 1 / span 1;
        grid-row: 2 / span 1;
    }
`;

const SkillsList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    grid-column: 3;
    grid-row: 1;
    margin: 10px;
    padding: 10px;
    background: #6d6b78;
    border-radius: 10px;
    border: 3px solid #070708;
    text-align: center;

    @media (max-width: 768px) {
        grid-column: 1 / span 1;
        grid-row: 3 / span 1;
    }
`;

const ExternalLinksDiv = styled.div`
    grid-column: 2 / 4;
    grid-row: 2;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    border: 3px solid #070708;
    background: #6d6b78;

    @media (max-width: 768px) {
        grid-column: 1 / span 1;
        grid-row: 4 / span 1;
    }
`;


function Homepage() {

    const [aboutMe, setAboutMe] = useState([])
    const [error, setError] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('http://127.0.0.1:3000/api/homepage'); 
                const data = await res.json();
                setAboutMe(data.data);
            } catch(err) {
                setError(err);
            }
        }

        getData();
    }, []);

    const mySkills = aboutMe.map(item => {
        return (
            <ListOfSkillsCard key={item._id} skills={item.skills} />
        )
    });


    return (
        <StyledHomepage>
            <NameDiv>
                <h2>Andy Johnson</h2>
                <H4>Aspiring Developer</H4>
                <Img src="/IMG_8126.jpg" alt="Photo of Andy" />
            </NameDiv>
            <SkillsList>
                {error && <Error error={error} />}
                {!error && mySkills}
            </SkillsList>
            <IntroDiv>
                <p>Hi and welcome to my responsive CV, across the application you will be able to find out a little bit about my skills and qualifications as well as work experience.
                    You will also be able to find a link to my GitHub where there are projects available to see. Some of which are completely my own work and others have been guided
                    through various courses that I have taken.
                </p>
                <p>
                    If you would like to get in touch with me, please fill out the contact form and I will get back to you!
                </p>
                <p>
                    Andy
                </p>
            </IntroDiv>
            <ExternalLinksDiv>
                <a href="https://www.linkedin.com/in/andy-johnson-5044932a4/" target="blank">
                    <FaLinkedin size="3rem" />
                </a>
                <a href="https://github.com/andy071811" target="blank">
                    <FaGithub size="3rem" color="white"/>
                </a>
            </ExternalLinksDiv>
        </StyledHomepage>
    )
}

export default Homepage
