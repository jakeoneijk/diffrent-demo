import React from 'react';

import { paperContent } from './Config/PaperContent';
import fig from './Source/image/Fig1.png';

import Title from './Component/Title';
import Section from './Component/Section';
import EnvToClean from './Source/EnvToClean';
import CleanToEnv from './Source/CleanToEnv';
import EnvToEnv from './Source/EnvToEnv';

const style = {
  display: 'flex',
  'flexDirection': 'column' as 'column'
}

function App() {
  return (
    <div className="App" style={style}>
      <Title/>
      <Section name='Abstract' content={paperContent.abstract}/>
      <div style={{margin: 'auto'}}><img style={{'width':'500px', padding:'40px'}} src={fig}/></div>
      <EnvToClean/>
      <CleanToEnv/>
      <EnvToEnv/>
      <Section name='References' content={paperContent.reference}/>
    </div>
  );
}

export default App;
