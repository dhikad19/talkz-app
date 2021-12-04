import styled from "styled-components";

export const ChatsPage = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
`
export const NavbarContainer = styled.div`
    width: 100%;
    height: 66px;
    background-color: #0096FF;
`
export const LogoTab = styled.div`
    position: absolute;
    left: 22px;
    top: 12px;
    font-size: 32px;
    font-weight: 700;
    color: white;

    @media screen and (max-width: 768px){
        font-size: 25px;
    }
`
export const LogoutTab = styled.div`
    position: absolute;
    top: 22px;
    right: 22px;
    color: white;
    cursor: pointer;

    @media screen and (max-width: 768px){
        padding: 5px;
        top: 17px;
        background: white;
        border-radius: 20px;
        text-align: center;
        color: #0096FF;
    }
`
