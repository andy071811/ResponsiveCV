import { HiAcademicCap, HiAtSymbol, HiBriefcase, HiHome, HiLink } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";


const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
`;

const Li = styled.li`
    list-style: none;

    @media (max-width: 768px) {
        display: none;
    }
`;

const StyledSpan = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
`;

function MainNav() {
    return (
        <>
            <NavList>
                <StyledSpan>
                    <NavLink to='/homepage'><HiHome/></NavLink>
                    <Li>
                        <NavLink to='/homepage' style={{ textDecoration: 'none'}}>
                            <Button>Home</Button>
                        </NavLink>        
                    </Li>
                </StyledSpan>

                <StyledSpan>
                    <NavLink to='/qualifications'><HiAcademicCap /></NavLink>
                    <Li>
                        <NavLink to='/qualifications' style={{ textDecoration: 'none'}}>
                            <Button>Qualifications</Button>
                        </NavLink>
                    </Li>
                </StyledSpan>

                <StyledSpan>
                    <NavLink to='/experience'><HiBriefcase /></NavLink>
                    <Li>
                        <NavLink to='/experience' style={{ textDecoration: 'none'}}>
                            <Button>Experience</Button>
                        </NavLink>
                    </Li>
                </StyledSpan>

                <StyledSpan>
                    <NavLink to='/projects'><HiLink /></NavLink>
                    <Li>
                        <NavLink to='/projects' style={{ textDecoration: 'none'}}>
                            <Button>Project Links</Button>
                        </NavLink>
                    </Li>
                </StyledSpan>
                
                <StyledSpan>
                    <NavLink to='/contact'><HiAtSymbol /></NavLink>
                    <Li>
                        <NavLink to='/contact' style={{ textDecoration: 'none'}}>
                            <Button>Contact</Button>
                        </NavLink>
                    </Li>
                </StyledSpan>
            </NavList> 
        </>
    )
}

export default MainNav
