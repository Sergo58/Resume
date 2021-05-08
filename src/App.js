import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyWorks} from "./myWorks/MyWorks";
import {CV} from "./Cv/CV";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {Preloader} from "./common/preloader/Preloader";

function App() {
  return (
    <div className="App">

<Header/>
<Main/>
<Skills/>
<MyWorks/>
<CV/>
<Contacts/>
<Footer/>

    </div>
  );
}

export default App;
