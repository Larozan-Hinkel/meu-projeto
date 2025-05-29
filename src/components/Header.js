import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        {/* Placeholder logo - substituir pela sua logo */}
        <h1>Meeta / Larozan</h1>
      </div>
      <nav className="nav-menu">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Portfólio
        </NavLink>
        <NavLink to="/sobre" className={({ isActive }) => (isActive ? 'active' : '')}>
          Sobre
        </NavLink>
        <NavLink to="/servicos" className={({ isActive }) => (isActive ? 'active' : '')}>
          Serviços
        </NavLink>
        <NavLink to="/contato" className={({ isActive }) => (isActive ? 'active' : '')}>
          Contato
        </NavLink>
      </nav>
    </header>
  );
}
