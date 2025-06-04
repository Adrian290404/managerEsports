import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import type { LayoutProps } from '../../interfaces/layoutPropsInterface';

export const LayoutComponent: React.FC<LayoutProps> = ({ teamId, onLogout }) => (
    <div className="layout">
        <header>
            <h1>Gestión de {teamId}</h1>
            <button onClick={onLogout}>Cerrar sesión</button>
        </header>
        <nav>
            <NavLink to="/menu">Overview</NavLink>
            <NavLink to="/menu/jugadores">Jugadores</NavLink>
            <NavLink to="/menu/estadisticas">Estadísticas</NavLink>
            <NavLink to="/menu/configuracion">Configuración</NavLink>
        </nav>
        <main>
            <Outlet />
        </main>
    </div>
);