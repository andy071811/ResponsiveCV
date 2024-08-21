import { DiGit } from "react-icons/di";
import styled from "styled-components";

const Li = styled.li`
    color: white;
    border-radius: 5px;
    padding-top: 10px;
    padding-bottom: 10px;

    &:hover {
        background: #9f9daf;
        transition-duration: 0.4s;
        cursor: pointer;
    }
`;

const A = styled.a`
    color: #292826;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

function ProjectLinkCard({ project }) {

    return (
        <div>
            <Li>
                <A target="blank" href={project.link}>
                    <DiGit /> {project.title}
                </A>
            </Li>
        </div>
    )
}

export default ProjectLinkCard
