import styled from "styled-components"

const StyledButton = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #292826;
    color: white;
    padding: 20px;
    height: 20px;
    width: auto;
    align-self: center;
    display: flex;
    align-items: center;
    &:hover {
        background-color: #52504d;
        transition-duration: 0.4s;
        cursor: pointer;
    }
`;

function Button({ children, handleClick }) {

    return (
        <StyledButton onClick={handleClick}>
            {children}
        </StyledButton>
    )
}

export default Button
