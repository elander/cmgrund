import { NewItemButton, NewItemFormContainer, NewItemInput } from "./styles";

import { useState } from "react";

type NewItemFormProps = {
    onAdd(text: string): void;
}

export const NewItemForm = ({onAdd}: NewItemFormProps) => {
    const [text, setText] = useState("");

    return (
        <NewItemFormContainer>
            <NewItemInput 
            value={text}
            onChange = {event => setText(event.target.value)}
             />
            <NewItemButton onClick={() => onAdd(text)}>Skapa ny</NewItemButton>
        </NewItemFormContainer>
    )
}