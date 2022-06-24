import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 100%;
    height: 90vh;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    background-color: lightblue;
`
export const EmptyHomeCell = styled.div`
    width: 100%;
    height: 100%;
`
export const EmptyHomeCellTwo = styled.div`
    width: 100%;
    height: 100%;
    grid-row-start: 2;
    grid-row-end: 4;
    border: 2px solid transparent;
`