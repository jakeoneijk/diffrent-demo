import React from 'react';

import { paperContent } from './Config/PaperContent';
import fig from './Source/image/Fig1.png';

import Title from './Component/Title';
import Section from './Component/Section';
import EnvToClean from './Source/EnvToClean';

const style = {
  display: 'flex',
  'flexDirection': 'column' as 'column'
}

function App() {
  return (
    <div className="App" style={style}>
      <Title/>
      <Section name='Abstract' content={paperContent.abstract}/>
      <div style={{margin: 'auto'}}><img style={{'width':'400px', padding:'40px'}} src={fig}/></div>
      <EnvToClean/>
    </div>
  );
}

export default App;
