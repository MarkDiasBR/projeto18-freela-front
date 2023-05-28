import styled from "styled-components";

export const Container = styled.div`
    & {
        display: none;
    }

    & a {
        width: 42px;
    }

    & ion-icon {
        cursor: pointer;
        color: #262626;
        transition: 300ms;
    }

    &.modo-escuro {
        background-color: #000000;
    }

    &.modo-escuro ion-icon {
        color: #FFF;
    }

    & ion-icon:hover {
        color: #8e8e8e;
        transition: 0ms;
    }

    @media (max-width: 628px) {
        & {
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            padding: 0;
            width: 100%;
            position: fixed;
            z-index: 2;
            bottom: 0px;
            right: 0px;
            border-top: 1px solid #DBDBDB;
            height: 55px;
            background-color: #FFFFFF;
        }

        &.modo-escuro {
            border-top-color: #8e8e8e;
        }

        & ion-icon:first-child {
            padding-left: 20px;
        }

        & ion-icon:last-child {
            padding-right: 20px;
        }
    }
`