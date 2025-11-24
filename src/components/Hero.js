import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1>Hello <span style={{color: '#929421ff'}}>.</span></h1>
        <h2>Eu sou Alexandre — <strong>Desenvolvedor de Software<br/> </strong></h2>
        <div className="hero-buttons">
            <a href="https://www.linkedin.com/in/psj-alexandre/" target="_blank" rel="noopener noreferrer">
                <button className="button-primary" type="button">Tem uma ideia?</button>
            </a>
            <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer">
                <button className="button-secondary" type="button">Currículo</button>
            </a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/retro1.png" alt="Alexandre Pereira" />
      </div>
    </section>
  );
}