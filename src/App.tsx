import React from 'react';
import Title from './Component/Title';

const style = {
  display: 'flex',
  'flexDirection': 'column' as 'column'
}

function App() {
  return (
    <div className="App" style={style}>
      <Title/>
    </div>
  );
}

export default App;
