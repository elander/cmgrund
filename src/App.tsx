import './App.css';

import { AddNewItem } from './AddNewItem';
import { AppContainer } from './styles';
import { Column } from './Column';
import React from 'react';
import { nanoid } from 'nanoid';
import { useStore } from './store';

// const AppData = [
//   {
//     text: "Min första riktiga kolumn",
//     tasks: [{text: "Mitt första kort"}, {text: "Mitt fjärde kort"}]
//   },
//   {
//     text: "Min andra kolumn",
//     tasks: [{text: "Mitt andra kort"}]
//   },
//   {
//     text: "Min tredje kolumn",
//     tasks: [{text: "Mitt tredje kort"}]
//   }
// ];


function App() {
  const {lists, addList} = useStore();

  function addColumnToState(text: string) {
    addList({
      id: nanoid(),
      text,
      tasks: []
    });
  }

  return (
    <AppContainer>
      {lists.map((item) =>{
        return (
          <Column text={item.text} tasks={item.tasks} id={item.id} key={item.id} />
        )
      })}
      <AddNewItem
      onAdd={addColumnToState}
      toggleButtonText="Lägg till kolumn" />
      </AppContainer>
  );
}

export default App;
