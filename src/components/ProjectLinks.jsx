import { useEffect, useState } from "react"
import Error from './Error'
import ProjectLinkCard from "./ProjectLinkCard";
import { v4 as uuidv4 } from 'uuid';

function ProjectLinks() {

    const [links, setLinks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getLinks = async () => {
            try {
                const res = await fetch('http://localhost:8000/projectLinks');
                const data = await res.json();
                setLinks(data);
            } catch(err) {
                console.log(err);
                setError(err)
            }
        }

        getLinks();
    }, []);

    const projectLink = links.map(project => <ProjectLinkCard key={uuidv4()} project={project}/>);

    return (
        <div>
            {error && <Error />}
            {!error && projectLink}
        </div>
    )
}

export default ProjectLinks

// links to github repo
