import { ColumnContainer, ColumnTitle } from "./styles";

import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { Task } from "./store";
import { findItemIndexById } from "./arrayverktyg";
import { nanoid } from "nanoid";
// import { useState } from "react";
import { useStore } from "./store";

type ColumnProps = {
    id: string;
    text: string;
    tasks: Task[];
}

// function useForceUpdate() {
//     const [, setValue] = useState(0);
//     return () => setValue(value => value +1);
// }

export const Column = ({text, id, tasks}: ColumnProps ) => {
    const {lists, addTask} = useStore();
    const listIndex = findItemIndexById(lists, id);
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map((task) => {
                return (
                    <Card text={task.text} id={task.id} key={task.id} />
                )
            })}
            <AddNewItem onAdd={(text) => {
                addTask({
                    id: nanoid(),
                    text: text,
                }, listIndex);
            }
                
            } 
            dark 
            toggleButtonText="Lägg till kort"/>
        </ColumnContainer>
    )
};