import './App.css';
import Top from './component/Top';
import Text from './component/Text';
import { useState } from 'react';
function App() {
  const [mode, setmode] = useState('light')
  function tooglemode(){
    if (mode==='dark'){
    setmode('light');
    document.body.style.backgroundColor = 'white';
    }
    else{
      setmode('dark')
      document.body.style.backgroundColor = 'grey';
    }

  }
  return (
    <>
    {/* console.log({a}) */}
    <Top title="Tour & Travels" mode={mode} togglemode={tooglemode}/>
    <div className="container">
    <Text mode={mode} togglemode={tooglemode}/>
    </div>
    </>
  );
}

export default App;
