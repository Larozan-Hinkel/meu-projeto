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

// 🏠 Página inicial
function Home() {
  return (
    <div style={styles.page}>
      <h2>Portfólio</h2>
      <p>Seus projetos aparecerão aqui futuramente.</p>
    </div>
  );
}

// ℹ️ Sobre
function Sobre() {
  return (
    <div style={styles.page}>
      <h2>Sobre</h2>
      <p>Engenheiro projetista mecânico e elétrico. Engenheiro de segurança do trabalho. Atendendo Joinville/SC e região.</p>
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
        <li>Laudos e ART</li>
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
      <p>Localização: Joinville / SC</p>
    </div>
  );
}

// 🔻 Rodapé
function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Larozan • Todos os direitos reservados.</p>
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
};

// 🚩 Renderizando na raiz
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
