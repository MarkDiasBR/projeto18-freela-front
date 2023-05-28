import styled from "styled-components";

export const Container = styled.header`

    background-color: #FFFFFF;
    position: sticky;
    top: 0;
    z-index: 2;

    &.modo-escuro {
        background-color: #000;
    }

    .divisor-vertical-logo {
        width: 1px;
        height: 22px;
        margin: 0 11px;
        background-color: #DBDBDB;
    }

    .divisor-vertical-logo.modo-escuro {
        background-color: #8e8e8e;
    }

    & #input-pesquisar::placeholder {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #979797;
        text-align: center;
    }

    & #input-pesquisar.modo-escuro::placeholder {
        font-family: 'Roboto', sans-serif;
        color: #dbdbdb;
        font-weight: 400;
    }

    & #input-pesquisar {
        width: 215px;
        height: 28px;
        background-color: #FAFAFA;
        border: 1px solid #DBDBDB;
        border-radius: 3px;
        box-sizing: border-box;
        outline: none;
    }

    & #input-pesquisar.modo-escuro {
        background-color: #3c4042;
        caret-color: #8e8e8e;
        border: none;
        color: #dbdbdb;
    }

    .icones {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    .divisor-horizontal {
        height: 1px;
        width: 100%;
        margin: 0 auto;
        background-color: #DBDBDB;
    }

    .divisor-horizontal.modo-escuro {
        background-color: #8e8e8e
    }

    @media (max-width: 628px) {
        .divisor-vertical-logo {
            display: none;
        }
    }
`

export const ContentContainer = styled.div`
    height: 54px;
    max-width: 943px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & button {
        border: none;
        background-color: transparent;
    }

    & button ion-icon {
        margin-top: 4px;
        font-size: 23px;
        margin-right: -5px;
    }

    & button ion-icon.modo-escuro {
        display:none;
    }

    & button ion-icon.switch:not(.modo-escuro) {
        color: #8e8e8e;
        transition: 300ms;
    }

    & button ion-icon.switch:not(.modo-escuro):hover {
        color: #FFFFFF;
        transition: 0ms;
    }

    & ion-icon {
        color: #262626;
        cursor: pointer;
        transition: 300ms;
    }

    &.modo-escuro ion-icon {
        color: #8e8e8e;
        transition: 300ms;
    }

    & ion-icon:hover {
        color: #8e8e8e;
        transition: 0ms;
    }

    &.modo-escuro ion-icon:hover {
        color: #FFFFFF;
        transition: 0ms;
    }


    @media (max-width: 628px) {
        & > div:first-child > button {
            display: inline;
            position: absolute;
            right: 43px;        
        } 

        & input,
        & div:last-child {
            display: none;
        }

        & div:last-child button {
            display: inline;
        }

        & > div > button {
            display: inline;
        }
    }
`

export const LogoContainer = styled.div`
    @import url('https://fonts.cdnfonts.com/css/marguerite-2');
    @import url('https://fonts.cdnfonts.com/css/gotham-extra-light');

    display: flex;
    align-items: center;

    & > ion-icon:last-child {
        display: none;
    }

    & p {
        font-family: 'Gotham Extra Light', 'sans-serif';
        color: #000;
    }

    & p.modo-escuro {
        color: #FFF;
    }

    & p span {
        font-family: 'Marguerite', 'sans-serif';
        color: #00AFF0;
        font-size: 16px;
    }

    & p.modo-escuro span {
        color: #FFF;
    }

    & img {
        padding-top: 5px;
        width: 103px;
        height: 29px;
    }

    & img.modo-escuro {
        display: none;
    }

    & img.switch:not(.modo-escuro) {
        display: inline;
    }

    & button {
        display: none;
    }

    @media (max-width: 628px) {

        & {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            position: relative;
        }

        & > ion-icon:last-child {
            display: inline;
        }
    }
`