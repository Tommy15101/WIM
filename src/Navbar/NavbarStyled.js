import styled from 'styled-components';
/* NAVBAR CONTAINER */
export const NavbarWrapper = styled.div`
    max-width: 100vw;
    height: 10vh;
    background-color: navy;
    display: grid;
    grid-template-columns: 1fr 1fr .8fr;
    grid-template-rows:2fr 1fr;
`
/* NAVBAR PRICES SLIDER */ 
export const NavbarPricesSlider = styled.div`
    width: 100%;
    height: 35px;
    background-color: red;
    grid-column-start: 1;
    grid-column-end:4;
`

/* NAVBAR LEFT SIDE */
export const NavbarLeft = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
`
/* NAVBAR CENTER */
export const NavbarCenter = styled.div`
    height: 100%;
    width: 100%;
`
/* NAVBAR RIGHT SIDE */
export const NavbarRight = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
export const NavbarRightFullCell = styled.div`
    height: auto;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    transition: all .2s ease;
    padding: 5px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        background-color: white;
        a{ 
            color: blue;
        }
    }
    a {
        color: white;
    }
`