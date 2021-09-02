import React from 'react';
import InstrucButton from './components/Instructions';
import FileButton from './components/Files';


function App() {  
  return (
    <div className="flex justify-center">
      <div>      
      <h1 className="flex justify-center pb-3 font-bold text-3xl">Finance App</h1>
      <p>
        1. Download the instructions <br/>
        2. Download inprocessing files <br/>
        3. Email 15 CPTs the packet 
      </p>
      <InstrucButton label = 'Download' Download />
      <br></br>
      <FileButton label = 'Download'/>
      </div>
      
    </div>
  );
  }

export default App;