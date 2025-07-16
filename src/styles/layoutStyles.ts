import styled from "styled-components";

interface PaletteProps {
    palette: string;
}

export const Background = styled.header<PaletteProps>`
    background-color: ${({ palette }) => palette};
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    box-sizing: border-box;
    box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.3);
`;

export const Logo = styled.img`
    width: 64px;
    height: 64px;
    object-fit: cover;
`;

export const Menu = styled.nav`
    display: flex;
    gap: 5rem;
    align-items: center;
`;

export const MenuItem = styled.span`
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    color: #ffffff;
    cursor: pointer;
    white-space: nowrap;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 0.8;
    }
`;

export const LeftIcon = styled.div`
    color: #ffffff;
    font-size: 1.5rem;
    cursor: pointer;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 0.8;
  }
`;
