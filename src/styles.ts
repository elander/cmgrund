import styled from 'styled-components';

// AppContainer
// ColumnContainer
// ColumnTitle
// CardContainer

type AddItemButtonProps = {
    dark?: boolean;
}

export const AddItemButton = styled.button<AddItemButtonProps>`
    color: ${props => (props.dark ? "#000" : "#fff")};
    background-color: #ffffff3d;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    max-width: 300px;
    padding: 10px 12px;
    text-align: left;
    width: 100%;
`

export const NewItemFormContainer = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
`

export const NewItemInput = styled.input`
    border-radius: 5px;
    border: none;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    width: 100%;
`
export const NewItemButton = styled.button`
    background-color: #5aac44;
    border-radius: 5px;
    border: none;
    color: #ffffff;
    padding: 6px 12px;
    text-align: center;
`


export const AppContainer = styled.article`
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    padding: 20px;
    background-color: #3179ba;
`
export const ColumnContainer = styled.div`
    background-color: #ebecf0;
    width: 300px;
    min-height: 40px;
    margin-right: 20px;
    border-radius: 5px;
    padding: 8px;
    flex-grow: 0;
`
export const ColumnTitle = styled.header`
    padding: 6px 16px 12px;
    font-weight: bold;
`

export const CardContainer = styled.div`
    background-color: #ffffff;
    cursor: pointer;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    max-width: 300px;
    border-radius: 5px;
    box-shadow: #091e4240 0px 1px 0px 0px;
`

