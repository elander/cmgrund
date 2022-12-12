import './App.css';

import { AddNewItem } from './AddNewItem';
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
      <AddNewItem
      onAdd={console.log}
      toggleButtonText="Lägg till kolumn" />
      </AppContainer>
  );
}

export default App;
