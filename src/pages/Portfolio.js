import React from 'react';

export default function Portfolio() {
  // Espaço para adicionar projetos depois
  // Estrutura básica com grid para imagens + descrições

  const projetos = [
    // Exemplo de projeto - depois você pode adicionar aqui seus projetos
    // { id: 1, titulo: 'Projeto 1', descricao: 'Descrição do projeto 1', imagemUrl: 'url_da_imagem' }
  ];

  return (
    <section className="page-container portfolio">
      <h2>Portfólio</h2>
      {projetos.length === 0 ? (
        <p>Em breve, adicionarei meus projetos aqui.</p>
      ) : (
        <div className="portfolio-grid">
          {projetos.map(proj => (
            <div key={proj.id} className="portfolio-item">
              <img src={proj.imagemUrl} alt={proj.titulo} />
              <h3>{proj.titulo}</h3>
              <p>{proj.descricao}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
