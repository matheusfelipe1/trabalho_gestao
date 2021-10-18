import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Routes from './routes/Routes';
import Footer from './components/Footer'
import NavAside from './navs/NavAside';
function App() {
  return (
    <div>
      <Header />
      <div className='conteudos'>
        <NavAside />
        <Routes />
      </div>
      
      <Footer />
    </div>
    
  )
}

export default App;
