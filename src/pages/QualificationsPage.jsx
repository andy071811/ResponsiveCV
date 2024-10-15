import styled from "styled-components";
import Qualifications from "../components/Qualifications";

const StyledQualificationsPage = styled.div`
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

function QualificationsPage() {

    return (
        <>
            <StyledQualificationsPage>
                <h1>Qualifications:</h1>
                <Ul>
                    <Qualifications />                
                </Ul>
            </StyledQualificationsPage>
            
        </>
    )
}

export default QualificationsPage
