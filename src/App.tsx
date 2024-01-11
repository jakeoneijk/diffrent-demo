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
  'flexDirection': 'column' as 'column',
  'alignItems': 'center' as 'center',
}

const iframeContainerStyle = {
  'paddingTop': '50px',
  

}

function App() {
  return (
    <div className="App" style={style}>
      <Title/>
      <div style={iframeContainerStyle}>
        <iframe width="640" height="400" src="https://www.youtube.com/embed/NYptYx7tMBY?si=VU2pXzrWSousMSVe" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      <Section name='Abstract' content={paperContent.abstract}/>
      <div style={{margin: 'auto'}}>
        <img style={{'width':'500px', padding:'40px'}} src={fig}/>
      </div>
      <EnvToClean/>
      <CleanToEnv/>
      <EnvToEnv/>
      <Section name='References' content={paperContent.reference}/>
    </div>
  );
}

export default App;
