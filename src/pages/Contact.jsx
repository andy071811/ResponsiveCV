import styled from "styled-components"
import ContactForm from "../components/ContactForm"

const StyledContact = styled.div`
    display: flex;
    flex-direction: column;
`

function Contact() {
    return (
        <StyledContact>
            <ContactForm />
        </StyledContact>
    )
}

export default Contact
