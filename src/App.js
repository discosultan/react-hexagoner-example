import React from 'react';
import Hexagoner from './Hexagoner';

const bgStyle = {
  margin: 0,
  width: '100%',
  height: '100%',
};

const centerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

function App() {
  const props = {
    shapes: [
      { color: '#fff', src: './me.png', width: 96, height: 96 },
      {
        color: '#1da1f2',
        src: './twitter.png',
        width: 48,
        height: 48,
        url: 'https://twitter.com/discosultan',
      },
      {
        color: '#171516',
        src: './github.png',
        width: 48,
        height: 48,
        url: 'https://github.com/discosultan',
      },
      {
        color: '#0274b3',
        src: './linkedin.png',
        width: 48,
        height: 48,
        url: 'https://www.linkedin.com/in/jvarus/',
      },
    ],
    primaryColor: '#fff',
    primaryText: 'JAANUS VARUS',
    primaryFont: '28px Montserrat',
    secondaryText: 'Amsterdam, The Netherlands',
    secondaryFont: '16px Montserrat',
  };

  return (
    <div style={bgStyle}>
      <div style={centerStyle}>
        <Hexagoner {...props} />
      </div>
    </div>
  );
}

export default App;
