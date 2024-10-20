import { useEffect, useState } from "react";
import Error from './Error';
import { getQualifications } from "../../hooks/useFetchData";

function Qualifications() {

    const [qualifications, setQualifications] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        getQualifications(setQualifications, setError);
    }, []);

    const mySkills = qualifications.map(skill => <li key={skill._id}>{skill.name}</li>);

    return (
        <div>
            {!error && mySkills}
            {error && <Error error={error} />}
        </div>
    )
}

export default Qualifications
