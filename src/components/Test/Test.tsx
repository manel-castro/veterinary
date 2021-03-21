import React, { useEffect } from 'react';

function Test() {
  useEffect(() => {
    const mainDom = document.getElementById('testDivMain');

    const detectScroll = () => {};

    mainDom?.addEventListener('scroll', () => {
      console.log('scrolled');
      console.log(mainDom.scrollTop);
    });

    // const secondDom = document.getElementById('testDivSecond');
    // if (secondDom !== null) secondDom.scrollTop = 1000;
  });

  return (
    <div style={{ overflowY: 'scroll', maxHeight: '100vh' }}>
      <div
        id="testDivMain"
        style={{
          height: '100vh',
          overflowY: 'scroll',
          marginRight: '-5px',
          background: 'blue',
        }}
      >
        <div
          id="testDivSecond"
          style={{
            background: 'grey',
            maxWidth: '700px',
            overflowY: 'hidden',
            maxHeight: '200vh',
          }}
        >
          <div style={{ height: '50vh' }}> Hey</div>
          <div style={{ height: '50vh' }}> Hey</div>
          <div style={{ height: '50vh' }}> Hey</div>
          <div style={{ height: '50vh' }}> Hey</div>
        </div>
      </div>
    </div>
  );
}

export default Test;
