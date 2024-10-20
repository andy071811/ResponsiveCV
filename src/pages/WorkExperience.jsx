//import styles from './WorkExperience.module.css';

import { useEffect, useState } from "react";
import WorkExperienceCard from "../components/WorkExperienceCard";
import styled from "styled-components";
import Error from "../components/Error";
import { getExperience } from "../../hooks/useFetchData";

const StyledWorkExperience = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
`;

function WorkExperience() {

    const [experience, setExperience] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        getExperience(setExperience, setError);
    }, []);

    return (
        <StyledWorkExperience>
            {!error && experience.map(exp => <WorkExperienceCard key={exp._id} exp={exp} />)}
            {error && <Error error={error} />}
        </StyledWorkExperience>
    )
}

export default WorkExperience
