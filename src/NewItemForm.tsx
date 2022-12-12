import { NewItemButton, NewItemFormContainer, NewItemInput } from "./styles";
import React, { useState } from "react";

import { useFocus } from "./useFocus";

type NewItemFormProps = {
    onAdd(text: string): void;
}

export const NewItemForm = ({onAdd}: NewItemFormProps) => {
    const [text, setText] = useState("");
    const inputRef = useFocus();
    const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") {
            onAdd(text);
        }
    }
    return (
        <NewItemFormContainer>
            <NewItemInput 
            ref={inputRef}
            value={text}
            onChange = {event => setText(event.target.value)}
            onKeyPress={handleEnter}
             />
            <NewItemButton 
                onClick={() => onAdd(text)}>
                    Skapa ny
            </NewItemButton>
        </NewItemFormContainer>
    )
}