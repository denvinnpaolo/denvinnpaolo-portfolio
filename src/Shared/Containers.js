import styled, { css } from 'styled-components';

export const AppContainer = styled.div`
    border: 1px solid red;
    height: 100%;
    width: 100vw;

    display: flex;
    flex-flow: column wrap;
`;

export const PageContainer = styled.div`
    border: 1px solid blue;
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
    
    border: 1px solid green;
    height: 80px;
    width: 100vw;
    box-sizing: border-box;
    padding-bottom: 4px;
    padding-left: 1%;
    padding-right: 1%;
    
    display: flex;
    justify-content: center;
    align-items: flex-end;

`;


