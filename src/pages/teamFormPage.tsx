import React from 'react';
import { Background, Content, FormContainer, Title, Label, Logo } from '../styles/teamFormStyles';
import def from '../assets/default.png';

export const TeamFormPage: React.FC = () => {

    return <Background>
        <Logo src={def} alt="Logo" />
        <FormContainer>
            <Content>
                <Title>
                    Jugadores
                </Title>
            </Content>
            <Content>
                hola
            </Content>
            <Content>
                hola
            </Content>
        </FormContainer>
    </Background>
};