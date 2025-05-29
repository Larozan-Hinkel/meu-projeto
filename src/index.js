import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

// 🔗 Menu de navegação
function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="/assets/logo/logolarozan2.png"
          alt="Logo Larozan"
          style={{ height: '60px', marginRight: '0.5rem' }}
        />
        <h1 style={styles.logo}>Eng. Larozan Hinkel - CREA/SC 193853-8</h1>
      </div>
      <div>
        <Link style={styles.link} to="/">Portfólio</Link>
        <Link style={styles.link} to="/sobre">Sobre</Link>
        <Link style={styles.link} to="/servicos">Serviços</Link>
        <Link style={styles.link} to="/contato">Contato</Link>
      </div>
    </nav>
  );
}

// 🏠 Página Portfólio
function Home() {
  return (
    <div style={styles.page}>
      <h2>Portfólio</h2>
      <p>Escolha uma das categorias abaixo para visualizar:</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/portfolio/maquinas" style={styles.button}>
          Máquinas e Equipamentos
        </Link>
        <Link to="/portfolio/layouts" style={styles.button}>
          Layouts
        </Link>
      </div>
    </div>
  );
}

// 📂 Máquinas e Equipamentos
function Maquinas() {
  const projetos = [
    { imagem: '/assets/portfolio/maquinas/projeto1.png' },
    { imagem: '/assets/portfolio/maquinas/projeto2.png'},
    { imagem: '/assets/portfolio/maquinas/projeto3.png'},
    { imagem: '/assets/portfolio/maquinas/projeto4.png'},
    { imagem: '/assets/portfolio/maquinas/projeto5.png'},
    { imagem: '/assets/portfolio/maquinas/projeto6.png'},
    { imagem: '/assets/portfolio/maquinas/projeto7.png'},
    { imagem: '/assets/portfolio/maquinas/projeto8.png'},
    { imagem: '/assets/portfolio/maquinas/projeto9.png'},
    { imagem: '/assets/portfolio/maquinas/projeto10.png'},
    { imagem: '/assets/portfolio/maquinas/projeto11.png'},
    { imagem: '/assets/portfolio/maquinas/projeto12.png'},
    { imagem: '/assets/portfolio/maquinas/projeto13.png'},
    { imagem: '/assets/portfolio/maquinas/projeto14.png'},
    { imagem: '/assets/portfolio/maquinas/projeto15.png'},
    { imagem: '/assets/portfolio/maquinas/projeto16.jpg'},
    { imagem: '/assets/portfolio/maquinas/projeto17.jpg'},
    { imagem: '/assets/portfolio/maquinas/projeto18.png'},
    { imagem: '/assets/portfolio/maquinas/projeto19.jpg'},
    { imagem: '/assets/portfolio/maquinas/projeto20.png'},
  ];

  return (
    <div style={styles.page}>
      <h2>Máquinas e Equipamentos</h2>
      <div style={styles.grid}>
        {projetos.map((projeto, index) => (
          <div key={index} style={styles.card}>
            <a href={projeto.imagem} target="_blank" rel="noopener noreferrer">
              <img src={projeto.imagem} alt={projeto.titulo} style={styles.imagem} />
            </a>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// 📐 Layouts
function Layouts() {
  const projetos = [
    {imagem: '/assets/portfolio/layouts/layout1.png'},
    {imagem: '/assets/portfolio/layouts/layout2.png'},
    {imagem: '/assets/portfolio/layouts/layout3.png'},
  ];

  return (
    <div style={styles.page}>
      <h2>Layouts</h2>
      <div style={styles.grid}>
        {projetos.map((projeto, index) => (
          <div key={index} style={styles.card}>
            <a href={projeto.imagem} target="_blank" rel="noopener noreferrer">
              <img src={projeto.imagem} alt={projeto.titulo} style={styles.imagem} />
            </a>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ℹ️ Sobre
function Sobre() {
  return (
    <div style={styles.page}>
      <h2>Sobre</h2>
      <p>Engenheiro Mecânico e de Segurança do Trabalho, atendendo Joinville/SC e região.</p>
    </div>
  );
}

// 🔧 Serviços
function Servicos() {
  return (
    <div style={styles.page}>
      <h2>Serviços</h2>
      <ul>
        <li>Projetos mecânicos industriais</li>
        <li>Projetos elétricos industriais</li>
        <li>Apreciação de Risco NR12</li>
        <li>Laudos NR12 e ART</li>
        <li>Consultoria em segurança do trabalho</li>
      </ul>
    </div>
  );
}

// 📞 Contato
function Contato() {
  return (
    <div style={styles.page}>
      <h2>Contato</h2>
      <p>Email: eng-laro@outlook.com</p>
      <p>WhatsApp: (48) 9 8850-7575</p>
      <p>Localização: Joinville / SC</p>
    </div>
  );
}

// 🔻 Rodapé
function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
        <img
          src="/assets/logo/logolarozan1.png"
          alt="Logo Larozan"
          style={{ height: '30px' }}
        />
        <p>&copy; {new Date().getFullYear()} Larozan • Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

// 🚀 App principal
function App() {
  return (
    <Router>
      <div style={styles.container}>
        <Navbar />
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio/maquinas" element={<Maquinas />} />
            <Route path="/portfolio/layouts" element={<Layouts />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

// 🎨 Estilos inline
const styles = {
  container: {
    backgroundColor: '#1C2A35',
    color: '#FFFFFF',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  nav: {
    backgroundColor: '#263746',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#FFFFFF',
    margin: 0,
    fontSize: '1.5rem',
  },
  link: {
    color: '#AEB4B9',
    margin: '0 1rem',
    textDecoration: 'none',
  },
  page: {
    flex: 1,
    padding: '2rem',
  },
  content: {
    flex: 1,
  },
  footer: {
    backgroundColor: '#263746',
    textAlign: 'center',
    padding: '1rem',
    color: '#AEB4B9',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginTop: '1rem',
  },
  card: {
    backgroundColor: '#2F3E4D',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'center',
  },
  imagem: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginBottom: '1rem',
  },
  button: {
    backgroundColor: '#3A4B5C',
    color: '#FFFFFF',
    padding: '0.8rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background-color 0.3s',
  },
};

// 🚩 Renderizando na raiz
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
