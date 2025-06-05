import styled from "styled-components";

export const Background = styled.div`
    background-color: #D9D9D9;
    width: 100%;
    height: 100vh;
    padding: 2em 0;
    font-family: "Inter", sans-serif;
    font-weight: 300;
    text-align: center;
`;

export const Logo = styled.img`
    width: 180px;
    height: 180px;
    background-color: white;
    cursor: pointer;
    border: 5px solid black;
    border-radius: 2em;
`;

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2em;
    margin-top: 3em;
`;

export const Content = styled.div`
    border-radius: 2em;
    width: 20%;
    background-color: white;
    padding: 1em;
`;

export const Title = styled.h2`
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    padding-top: 1em;
`;

export const Label = styled.label`
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 1.1em;
    color: #333;
    text-align: left;
    margin: .5em 0 0 1em;
    display: block;
`;

export const Input = styled.input`
    font-family: "Inter", sans-serif;
    font-weight: 300;
    display: block;
    width: calc(100% - 2em);
    margin: 0 0 1em 1em;
    padding: 0.4em 0;
    border: none;
    border-bottom: 1px solid #000;
    font-size: 1em;
    outline: none;
    background-color: transparent;
    transition: border-bottom-color 0.3s;

    &:focus {
        border-bottom-color: #555;
    }
`;
