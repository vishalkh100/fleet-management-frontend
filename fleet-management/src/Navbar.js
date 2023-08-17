import logo from './logo.svg';
import './App.css';
import {Header} from './Header'
import { Header1 } from './Header1';
import {Footer} from './Footer'
import {Image} from './Image'
import { Information } from './Information';
export function Navbar() {
  return (
    <div className="App">
       <header>
        <Header/>
        <Header1/>
      </header>
    <Information/><Image/>
 
      <image>
        
      </image>
      
      <footer>
        <Footer/>
      </footer>
    
     
    
    </div>
  );
}


