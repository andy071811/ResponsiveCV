import { useEffect, useState } from "react"
import Error from './Error'
import ProjectLinkCard from "./ProjectLinkCard";
import { getLinks } from "../../hooks/useFetchData";

function ProjectLinks() {

    const [links, setLinks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        getLinks(setLinks, setError);
    }, []);

    const projectLink = links.map(project => <ProjectLinkCard key={project._id} project={project}/>);

    return (
        <div>
            {error && <Error error={error} />}
            {!error && projectLink}
        </div>
    )
}

export default ProjectLinks

// links to github repo
