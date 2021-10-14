import styled, { css } from 'styled-components';

export const AppContainer = styled.div`
    height: 100%;
    width: 100vw;

    display: flex;
    flex-flow: column wrap;
`;

export const PageContainer = styled.div`
    height: 300vh;
    width: 100vw;

    ${(props) => 
        props.custom &&
        css`
            height: ${props.height}
        `
    }
`;


export const NavigationContainer = styled.div`
    top: 0;
    position: fixed;
    z-index: 1;

    border-bottom: 1px solid black;
    height: 80px;
    width: 100vw;
    box-sizing: border-box;
    padding-bottom: 4px;
    padding-left: 1%;
    padding-right: 1%;
    background: white;

    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const SectionContainer = styled.div`
    height: 33.3333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    

    ${(props) => 
        props.background &&
        css`
            background: ${props.background}
        `
    }
`;

export const ListContainer = styled.div`
    border: 1px solid red;
    width: 100%;
    height: 80%;

    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: space-evenly;

`

