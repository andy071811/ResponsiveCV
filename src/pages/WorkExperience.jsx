//import styles from './WorkExperience.module.css';

import { useEffect, useState } from "react";
import WorkExperienceCard from "../components/WorkExperienceCard";
import styled from "styled-components";
import Error from "../components/Error";

const StyledWorkExperience = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
`;

function WorkExperience() {

    const [experience, setExperience] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getExperience = async () => {
            try {
                const res = await fetch('http://localhost:8000/workExperience');
                const data = await res.json();
                setExperience(data);
            } catch(err) {
                console.log(err);
                setError(err)
            }            
        }

        getExperience();
    }, []);

    return (
        <StyledWorkExperience>
            {!error && experience.map(exp => <WorkExperienceCard key={exp.id} exp={exp} />)}
            {error && <Error error={error} />}
        </StyledWorkExperience>
    )
}

export default WorkExperience
