import React from 'react';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-info">
        <h2>Quem sou eu</h2>
        <p>
          Desenvolvedor de Software recém-formado, apaixonado por tecnologia e por construir 
          sistemas que realmente resolvem problemas. Minha jornada na programação começou com 
          curiosidade e rapidamente se transformou em dedicação — hoje, busco evoluir todos os 
          dias através de novos desafios, estudos e projetos práticos.
        </p>

        <div className="stats">
          <div className="stat">
            <h3>12<span style={{color: '#929421ff'}}> +</span></h3>
            <p>Projetos desenvolvidos acadêmicos e pessoais</p>
          </div>
          <div className="stat">
            <h3>100<span style={{color: '#929421ff'}}> %</span></h3>
            <p>Dedicação em aprender e melhorar</p>
          </div>
          <div className="stat">
            <h3>1<span style={{color: '#929421ff'}}> +</span></h3>
            <p>De experiência prática em projetos e estudos</p>
          </div>
        </div>
      </div>
    </section>
  );
}