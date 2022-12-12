import './App.css';

import { AppContainer } from './styles';
import { Card } from './Card';
import { Column } from './Column';
import React from 'react';

function App() {
  return (
    <AppContainer>
      <Column text="Min första riktiga kolumn">
        <Card text='Mitt första kort' />
        <Card text='Mitt andra kort' />
        <Card text='Mitt tredje kort' />
      </Column>
      </AppContainer>
  );
}

export default App;
