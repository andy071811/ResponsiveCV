import styled from 'styled-components';
import MainNav from './MainNav';

const StyledSidebar = styled.nav`
    background: radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);
    border-right: 2px solid black;

    transition: width 1.5s, flex-basis 0.5s;
    /* width: 75%;

    &:hover {
        width: 100%;
    } */
`;

function Sidebar() {
    return (
        <StyledSidebar>
           <MainNav /> 
        </StyledSidebar>
    )
}

export default Sidebar
