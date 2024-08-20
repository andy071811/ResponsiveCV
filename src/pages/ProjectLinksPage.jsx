import styled from "styled-components";
import ProjectLinks from "../components/ProjectLinks";

const StyledProjectLinksPage = styled.div`
    background: #6d6b78;
    border-radius: 10px;
    border: 3px solid #070708;
    margin: 10px;
    padding: 20px 30px;
    height: fit-content;
    color: #292826;
`;

const Ul = styled.ul`
    background: #7e7c8b;
    border-radius: 10px;
    margin-top: 10px;
    padding: 10px 30px;
    list-style: none;
`;

function ProjectLinksPage() {
    return (
        <StyledProjectLinksPage>
            <h1>Project Links:</h1>
            <Ul>
                <ProjectLinks />
            </Ul>
        </StyledProjectLinksPage>
    )
}

export default ProjectLinksPage;
