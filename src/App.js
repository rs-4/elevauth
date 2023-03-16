import logo from './logo.svg';
import image1plan from './item/FirstMid.png';
import table from './item/table.png';
import './App.scss';
import flowrigth from './item/flow.png';
import flowerleft from './item/flowerleft.png';
import backrigth from './item/backrigth.png';
import tableblur from './item/tableblur.png';
import fullblur from './item/fullblur.png';



function App() {
  return (
    <div className="App">
      <div className="Firstpage">
    <div className="Header">
      <div className="Header__name">
        <div className='Header__name--firstName'>Elevath</div>
        <div className='Header__name--secondName'>Design</div>
      </div>
      <div className="Header__menu">
        <div className="Header__menu--item">Home</div>
        <div className="Header__menu--item">About</div>
        <div className="Header__menu--item">Services</div>
        </div>
    </div>
       <div className="Firstpage__title">Where Passion and Emotion come together</div>
       <img src={table} className="Image__first" alt="logo" />
        <img src={image1plan} className="Image__image1" alt="logo" />
        <img src={flowrigth} className="Image__flowrigth" alt="logo" />
        <img src={flowerleft} className="Image__flowerleft" alt="logo" />
        <img src={backrigth} className="Image__backrigth" alt="logo" />
        <img src={tableblur} className="Image__tableblur" alt="logo" />
        <img src={fullblur} className="Image__fullblur" alt="logo" />
      

       <div className="Firstpage__shop">
         <div className="Firstpage__shop--texte">Shop Now</div>
       </div>
      
    </div>
    </div>
  );
}

export default App;
