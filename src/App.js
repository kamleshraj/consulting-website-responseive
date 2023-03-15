import './App.css';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Home from './pages/Home';
import Services from './pages/Services';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Footer from './components/Footer';
import BottomTop from './components/BottomTop';
function App() {
  const theme = {
    colors: {
      heading: 'rgb(24 24 29)',
      text: 'rgb(24 24 29)',
      white: 'white',
      black: '#212529',
      helper: '#8490ff',
      bg: 'rgb(249 249 255)',
      footer_bg: '#0a1435',
      btn: 'rgb(98 84 243)',
      border: 'rgb(98, 84, 243, 0.5)',
      hr: '#ffffff',
      gradient: 'linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)',
      shadow:'10px 0px 15px #4e4e4eb0'
    },
    responsive:{mobile:'768px', tab:'998px'}
}
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/aboutus' element={<Aboutus />}/>
          <Route path='/contactus' element={<Contactus />}/>
        </Routes>
          <Footer />
          <BottomTop/>  
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
