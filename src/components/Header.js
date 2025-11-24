import React from 'react';

export default function Header({ menuOpen, toggleMenu }) {
  return (
    <header>
      <div className="logo">Alexandre Pereira</div>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#contacts">Contatos</a>
      </nav>
      <div
        role="button"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        tabIndex={0}
        className="menu-toggle"
        onClick={toggleMenu}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') toggleMenu();
        }}
      >
        &#9776;
      </div>
    </header>
  );
}