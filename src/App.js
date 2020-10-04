import React from 'react';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const  App = () => {
  return (
    <Page>
      <Navbar/>
      <Homepage />
    </Page>
  );
}

export default App;
