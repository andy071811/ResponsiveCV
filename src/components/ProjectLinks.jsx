import { useEffect, useState } from "react"
import Error from './Error'
import ProjectLinkCard from "./ProjectLinkCard";

function ProjectLinks() {

    const [links, setLinks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getLinks = async () => {
            try {
                const res = await fetch('http://127.0.0.1:3000/api/projectLinks');
                const data = await res.json();
                setLinks(data.data);
            } catch(err) {
                console.log(err);
                setError(err)
            }
        }

        getLinks();
    }, []);

    const projectLink = links.map(project => <ProjectLinkCard key={project._id} project={project}/>);

    return (
        <div>
            {error && <Error />}
            {!error && projectLink}
        </div>
    )
}

export default ProjectLinks

// links to github repo
