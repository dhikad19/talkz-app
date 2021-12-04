import styled from "styled-components";
import { FcGoogle } from "react-icons/fc"

export const LoginPage = styled.div`
    background-image: linear-gradient(#0096FF, #00FFFF);
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 0;
`

export const LoginTitle = styled.h1`
    text-align: center;
    font-size: 50px;
    color: white;
    margin-bottom: 105px;

    span {
        padding: 10px;
        background: white;
        color: #0096FF;
        border-radius: 10px;
    }

    @media screen and (max-width: 768px) {
        font-size: 35px;
        padding: 40px;
        justify-content: center;
        text-align: center;

        span{
            padding: 2px;
        }
    }
`

export const LoginCard = styled.div`
    position: relative;
    justify-content: center;
    max-width: 300px;
    padding: 50px 32px;
    text-align: center;
    background-color: white;
    border-radius: 22px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        padding: 32px 19px;
        margin-top: -50px;
    }
`

export const CardTitle = styled.h1`
    color: #0096FF;
    margin-bottom: 40px;
`

export const LoginButton = styled.button`
    background: white;
    display: flex;
    width: 250px;
    height: 60px;
    align-items: center;
    border: none;
    border-radius: 100px;
    color: #0096FF;
    font-size: 15px;
    cursor: pointer;
    text-align: center;
    justify-content: center;
    margin: auto;
    font-size: 20px;
    border: 3px solid #0096FF;
    transition: 0.5s ease-in-out;

    &:hover{
        transition: 0.5s ease-in-out;
        color: white;
        background: #0096FF;
    }

    @media screen and (max-width: 768px) {
        width: 250px;
        height: 60px;
    }
`

export const GoogleLogo = styled(FcGoogle)`
    font-size: 25px;
    margin-left: 5px;
`