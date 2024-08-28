import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import styled from "styled-components"

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns: 15% 1fr;
    grid-template-rows: 7% 1fr;
    height: 100vh;
    background-color: #292826;

    @media (max-width: 425px) {
        grid-template-rows: 1fr;
    }
`;

const StyledMain = styled.main`
    overflow-y: scroll;
`;


function AppLayout() {
    return (
        <StyledAppLayout>
            <Header />
            <Sidebar />
            <StyledMain>
                <Outlet />
            </StyledMain>
        </StyledAppLayout>
    )
}

export default AppLayout
