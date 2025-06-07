import styled from "styled-components";

interface Button{
    type: 'add' | 'remove' | 'navigate';
}

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
    width: 140px;
    height: 140px;
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

export const Form = styled.div`
    width: 20%;
`

export const Content = styled.div`
    position: relative ;
    border-radius: 2em;
    width: 100%;
    background-color: white;
    padding: 1em;
`;

export const Title = styled.h2`
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    margin-bottom: 1em;
`;

export const Label = styled.label`
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: #333;
    text-align: left;
    margin: .5em 0 0 1em;
    display: block;
`;

export const Input = styled.input`
    font-family: "Inter", sans-serif;
    font-weight: 300;
    font-size: 1rem;
    display: block;
    width: calc(100% - 2em);
    margin: 0 0 1em 1em;
    padding: 0.4em 0;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
    background-color: transparent;
    transition: border-bottom-color 0.3s;

    &:focus {
        border-bottom-color: #555;
    }

    &[type="number"]::-webkit-outer-spin-button, &[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type="number"] {
        -moz-appearance: textfield;
    }
`;

export const ControlButtons = styled.div`
    text-align: right;
`;

export const Button = styled.button<Button>`
    border: none;
    background-color: transparent;
    padding: .3em .4em;
    margin-right: ${({ type }) =>
        type === "remove" ? "1.2em" : ".4em"
    };
    border-radius: 50%;
    border: 2px solid ${({ type }) => 
        type === "add" ? "#a8e6a1" :
        type === "remove" ? "#f5a8a8" :
        type === "navigate" && "#6c757d"
    };
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        transform: translateY(-.3em);
        background-color:rgb(231, 231, 231);
    }
`;

export const Current = styled.h3`
    font-family: "Poppins", sans-serif;
    font-weight: 500;
`;

export const FormHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: .4em 1em;
`;

export const FormFooter = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 500;
`;