import React from 'react';
import styled from 'styled-components';
import './App.css';
import Calculator from './components/Calculator';

const Container = styled.div`
  align-items: center;
  background: #323232;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  /* width: 100vw; */
`;

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
