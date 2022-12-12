import styled from 'styled-components';

// AppContainer
// ColumnContainer
// ColumnTitle
// CardContainer

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

