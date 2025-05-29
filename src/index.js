import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

// 🔗 Menu de navegação
function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Larozan</h1>
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
  const projetos = [
    {
      imagem: '/assets/portfolio/maquinas/projeto1.png',
    },
    {
      imagem: '/assets/portfolio/maquinas/projeto2.png',
    },
    {
      imagem: '/assets/portfolio/maquinas/projeto3.png',
    },
    {
      imagem: '/assets/portfolio/maquinas/projeto4.png',
    },
    {
      imagem: '/assets/portfolio/maquinas/projeto5.png',
    },
    {
      imagem: '/assets/portfolio/maquinas/projeto6.png',
    },
    {
      imagem: '/assets/portfolio/maquinas/projeto7.png',
    },
    {
      imagem: '/assets/portfolio/maquinas/projeto8.png',
    },
    {
      imagem: '/assets/portfolio/maquinas/projeto9.png',
    },
    {
      imagem: '/assets/portfolio/maquinas/projeto10.png',
    },
    {
      imagem: '/assets/portfolio/maquinas/projeto11.png',
    },
    {
      imagem: '/assets/portfolio/maquinas/projeto12.png',
    },
    {
      imagem: '/assets/portfolio/maquinas/projeto13.png',
    },
    {
      imagem: '/assets/portfolio/maquinas/projeto14.png',
    },
    {
      imagem: '/assets/portfolio/maquinas/projeto15.png',
    },
    {
      imagem: '/assets/portfolio/maquinas/projeto16.png',
    },
    {
      imagem: '/assets/portfolio/maquinas/projeto17.png',
    },
    {
      imagem: '/assets/portfolio/maquinas/projeto18.png',
    },
    {
      imagem: '/assets/portfolio/maquinas/projeto19.png',
    },
    {
      imagem: '/assets/portfolio/maquinas/projeto20.png',
    },
    
  ];

  return (
    <div style={styles.page}>
      <h2>Portfólio</h2>
      <div style={styles.grid}>
  {projetos.map((projeto, index) => (
    <div key={index} style={styles.card}>
      <a href={projeto.imagem} target="_blank" rel="noopener noreferrer">
        <img
          src={projeto.imagem}
          alt={projeto.titulo}
          style={styles.imagem}
        />
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
      <p>Engenheiro Mecatrônico e Engenheiro de segurança do trabalho. Atendendo Joinville/SC e região.</p>
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
      <p>WhatsApp: (48)9 8850 7575</p>
      <p>Localização: Joinville / SC</p>
    </div>
  );
}

// 🔻 Rodapé
function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Larozan Hinkel • Todos os direitos reservados.</p>
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
};

// 🚩 Renderizando na raiz
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
