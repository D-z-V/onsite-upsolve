import { useState } from 'react';
import './App.css';
import { CopyOutlined } from '@ant-design/icons';


function App() {

  const [passLen, setPassLen] = useState(20);
  const [symbol, setSymbol] = useState(false);
  const [capitalize, setCapitalize] = useState(false);
  const [number, setNumber] = useState(false);
  const [genPass, setGenPass] = useState('');


  const getData = (e) => {
    e.preventDefault();
    var password = '';
    var asciiObj = [
      [33, 43],              //symbols
      [65, 90],              //capitals
      [48, 57],              //numbers
      [97, 122]
    ]
    var conditons = [symbol, capitalize, number];
    for (let i = 0; i < conditons.length; i++) {
      if (conditons[i] === false) {
        conditons.splice(i, 1);
        asciiObj.splice(i, 1);
        i--;
      }
    }
    for (let i=0 ; i < passLen; i++) {
      var range = asciiObj[Math.floor((Math.random() * asciiObj.length))];
      var randCharAscii = Math.floor((Math.random() * (range[1] - range[0] + 1) + range[0]));
      password = password + String.fromCharCode(randCharAscii);
    }
    setGenPass(password);
  }

  const clipboardCopy = () => {
    navigator.clipboard.writeText(genPass);
  }

  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <h2>Password Generator</h2>
      <form className='w-75' onSubmit={ getData }>
        <h5 className="form-label mt-5 d-flex flex-column align-items-center font-weight-bold">Password Length</h5>
        <input type="range" className="form-range mt-2 w-100" min={0} max={20} step="1" onChange={ (e) => setPassLen(e.target.value) }/>
        <h6 className="d-flex justify-content-center mt-2 mb-5"> {passLen} </h6>
        <hr/>
        <div className='d-flex flex-column align-items-center'>
          <h4 className='mt-4 mb-4'> Customization </h4>
          <div className="form-check form-switch mt-2">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={ (e) => setSymbol(e.target.checked) }/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Include Symbols</label>
          </div>
          <div className="form-check form-switch mt-2">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={ (e) => setCapitalize(e.target.checked) }/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Include Capitalization </label>
          </div>
          <div className="form-check form-switch mt-2 mb-4">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={ (e) => setNumber(e.target.checked) }/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Include Numbers </label>
          </div>
        </div>
        <hr/>
        <div className='d-flex justify-content-center'>
          <button type="submit" className="btn btn-outline-success rounded-pill mt-3 mb-1">Generate Password</button>
        </div>
      </form>
      <div className="d-flex flex-row mt-5 mb-4">
        <input type="text" className="form-control ml-5" placeholder="Generated Password" value={ genPass } readOnly={true} />
        <button 
          type="button" 
          className="btn btn-secondary"
          data-bs-container="body"
          data-bs-toggle="popover" 
          data-bs-placement="right" 
          data-bs-content="Copied!"

          onClick={ clipboardCopy }

          style= {
            {
              marginLeft: "10%",
            }
          }
        >
          <CopyOutlined
            style={
              { 
                cursor: 'pointer',
                fontSize: '210%',
              }
            }
          />
        </button>
      </div>
    </div>
  );
}

export default App;
