import { useEffect, useState } from "react";
import Error from './Error';

function Qualifications() {

    const [qualifications, setQualifications] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getQualifications = async () => {
            try {
                const res = await fetch('http://localhost:8000/qualifications');
                const data = await res.json();
                setQualifications(data);
            } catch(err) {
                setError(err);
            }            
        }

        getQualifications();
    }, []);

    const mySkills = qualifications.map(skill => <li key={skill.id}>{skill.name}</li>);

    return (
        <div>
            {!error && mySkills}
            {error && <Error />}
        </div>
    )
}

export default Qualifications
