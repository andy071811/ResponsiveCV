import styled from "styled-components"
import Button from "./Button";

const StyledModal = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: center;
    border: 2px solid black;
    border-radius: 10px;
    height: auto;
    width: 50vh;
    position: absolute;
    background-color: white;
`;

const P = styled.p`
    margin-bottom: 10px;
`;

function Modal({ setOpenModal, setIsLoading, modalMessage }) {

    const handleClick = (e) => {
        e.preventDefault();
        setIsLoading(false);
        setOpenModal(false);
    }

    return (
        <StyledModal>
            <P>{modalMessage}</P>
            <Button handleClick={handleClick}>Close</Button>
        </StyledModal>
    )
}

export default Modal
