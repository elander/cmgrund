import { AddItemButton } from "./styles";
import { NewItemForm } from "./NewItemForm";
import { useState } from "react";

type AddNewItemProps = {
    onAdd(text: string): void;
    toggleButtonText: string;
    dark?: boolean;
}

export const AddNewItem = (props: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false);
    const { onAdd, toggleButtonText, dark} = props;
    // let showForm = false;

    if(showForm) {
        return (
            <NewItemForm
            onAdd={text => {
                onAdd(text);
                setShowForm(false);
            }} />
        );
        }

    return (
        <AddItemButton dark={dark} 
        onClick={() =>setShowForm(true)}>
            {toggleButtonText}
        </AddItemButton>
    );

}