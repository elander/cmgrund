import { ColumnContainer, ColumnTitle } from "./styles";

import { AddNewItem } from "./AddNewItem";

type ColumnProps = {
    text: string;
    children?: React.ReactNode; 
}

export const Column = ({text, children}: ColumnProps ) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
            <AddNewItem onAdd={console.log} 
            dark 
            toggleButtonText="Lägg till kort"/>
        </ColumnContainer>
    )
};