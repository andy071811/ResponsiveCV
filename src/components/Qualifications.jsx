import { useEffect, useState } from "react";
import Error from './Error';

function Qualifications() {

    const [qualifications, setQualifications] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getQualifications = async () => {
            try {
                const res = await fetch('http://127.0.0.1:3000/api/qualifications');
                const data = await res.json();
                setQualifications(data.data);
            } catch(err) {
                setError(err);
            }            
        }

        getQualifications();
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
