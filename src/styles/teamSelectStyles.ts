import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
`;

export const Background = styled.div`
    background-color: #D9D9D9;
    width: 100%;
    height: 100vh;
    padding: 6em 0 14em 0;
    font-family: "Inter", sans-serif;
    font-weight: 300;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Title = styled.h1`
    font-family: "Inter", sans-serif;
    font-weight: 300;
    font-size: 2rem;
`;

export const AddButton = styled.button`
    padding: 1.1em 1.3em;
    font-size: 1.25rem;
    background-color: #C2C2C2;
    border-radius: 1.2em;
    border: none;
    cursor: pointer;
    bottom: 4em;
    animation: ${fadeInUp} 0.6s ease-out normal, ${pulse} 2.5s ease-in-out infinite;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.4s ease;
    align-self: center;

    &:hover {
        background-color: #A5A5A5;
    }

    &:active {
        background-color: #909090;
    }
`;

export const CardContainer = styled.div`
    width: 50%;
    margin: 5em auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4em;
`;

export const CardImage = styled.img`
    width: 130px;
    height: 130px;
    background-color: #C2C2C2;
    border-radius: 1.5em;
    cursor: pointer;
    transition: transform 0.5s ease, box-shadow 0.5s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.65);
    }
`;