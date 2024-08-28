import styled from "styled-components"
import LocalWeather from "./LocalWeather";


const StyledHeader = styled.header`
    background: radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);
    grid-column: span 2;
    //border-bottom: 2px solid #292826;
    align-content: center;
    display: flex;
    align-items: center; // moves up and down
    justify-content: center; // moves left and right: ;
    padding-left: 15px;
    padding-right: 15px;

    @media (max-width: 425px) {
        display: none;
    }
`;


function Header() {
    return (
        <StyledHeader>
            <LocalWeather />
        </StyledHeader>
    )
}

export default Header
