import './App.css';
import Header from './components/header';
import WhatIDo from './components/whatIDo';
import Report from './components/report';
import Footer from './components/footer';
import EmailAlert from './components/emailAlert';

import pfp from './public/imgs/person.jpg';
import biglogo from './public/imgs/logo.jpg';

function App() {
    return (
        <div className='App'>
            <div className='header-container'>
                <Header letter='M' name='Maria Marques'/>
            </div>
            <div className='body-container'>
                <Report img={pfp} occupation='Frontend-depveloper' name='Maria Marques' description='Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.'/>
                <WhatIDo/>
            </div>
            <div className='footer-container'>
                <Footer/>
            </div>
        </div>
  );

// return (<EmailAlert logo={biglogo} enviroment={4} name={1} creadate={2} expdate={3}/>);
}

export default App;