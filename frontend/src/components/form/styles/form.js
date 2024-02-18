import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div( ({theme}) => `
    display: flex;
    flex-direction: column;
    min-height: 200px;
    background-color: #40444b;
    border-radius: 15px;
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    margin-top: 3rem;
    max-width: 500px;
    padding: 40px;
    position: relative;
`);

export const Title = styled.div( ({theme}) => `
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 600;
    color: #7289da;
    margin: 1rem auto 1.5rem;
    font-family: Syncopate;
`);

export const Line = styled.div( ({theme}) => `
    background: #51555c;
    height: 0.15rem;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
`);

export const Error = styled.div( ({theme, warn}) => `
    background: ${warn ? theme.caution : "#dc3545"};
    border-radius: 0.75rem;
    font-size: 1rem;
    margin: 0 0 1.75rem;
    color: ${warn ? theme.black : theme.white};
    padding: 15px 20px;
`);

export const Base = styled.form( ({theme}) => `
    display: flex;
    flex-direction: column;
    // max-width: 450px;
    width: 100%;
`);

export const Input = styled.input( ({theme, file}) => `
    border-radius: 10px;
    width: 100%;
    font-size: 1rem;
    background: #51555c;
    border: 0;
    color: #fff;
    line-height: 50px;
    padding: 5px 20px;
    box-sizing: border-box;
    font-family: Montserrat;

    &:focus
    {
        outline: none;
    }

    &::placeholder {
        position: absolute;
        right: 1.25rem;
        top: 30%;
        color: ${theme.textColor3}
    }

    &[type=password]
    {
        font-size: 1.75rem;
    }

    &[type=file]::file-selector-button
    {
        border-radius: 5px;
        font-size: 0.9rem;
        cursor: pointer;
        background: ${theme.backgroundColor4};
        border: 0;
        color: ${theme.textColor2};
        padding: 3px 7px;
        font-family: Montserrat;

        &:focus
        {
            outline: none;
        }
    }

    &[type=file]
    {
        color: ${file ? theme.textColor1 : "transparent"};
    }
`);

export const Label = styled.label( ({theme, small}) => `
    font-size: 1rem;
    font-family: Montserrat;
    color: #85888f;
    cursor: text;
    position: absolute;
    top: 30%;
    left: ${ small ? "15%" : "5.5%"};
    transition: 0.2s ease all;
    background: none;

    ${Input}:focus,
    ${Input}:not(:placeholder-shown) + &
    {
        background: #7289da;
        padding: 0.2rem 0.5rem 0.2rem;
        border-radius: 0.5rem;
        top: -15%;
        left: ${ small ? "15%" : "3%"};
        font-size: 0.9rem;
        color: #fff;
    }
`);

export const Submit = styled.button( ({theme}) => `
    background: #7289da;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0.5rem 0 0;
    padding: 16px;
    border: 0;
    color: #fff;
    cursor: pointer;
    font-family: Montserrat;

    &:disabled
    {
        opacity: 0.75;
        cursor: initial;
    }
`);

export const Text = styled.div( ({theme}) => `
    color: ${theme.textColor1};;
    margin: 0.8rem auto 0;
    font-size: 0.9rem;
    font-family: Montserrat;
`);

export const Icon = styled.div( ({theme, search}) => `
    color: #74777e;
    position: absolute;
    right: 5%;
    bottom: ${ search ? "20%" : "25%"};
    font-size: 1.5rem;
    cursor: pointer;

    &:hover
    {
        color: #85888f;
    }
`);

export const InputContainer = styled.div( ({theme, width, notAlone, height, notLast, flexDirection}) => `
    position: relative;
    height: 4rem;
    margin-bottom: 2rem;
    margin-left: ${notAlone ? "1rem" : "0" };
    width: ${ width ? width : "100%"};
    height: ${ height ? height : "100%"};
    flex-direction: ${flexDirection ? flexDirection : ""};

    &:last-of-type
    {
        margin-bottom: ${notAlone ? "0" : notLast ? "1rem" : "1.5rem;" };
    }
`);

export const SearchContainer = styled.div( ({theme, width, notAlone}) => `
    position: relative;
    height: 4rem;
    margin-bottom: 1rem;
    margin-left: ${notAlone ? "1rem" : "0" };
    width: ${ width ? width : "100%"};

    &:last-of-type
    {
        margin-bottom: ${notAlone ? "0" : "1.5rem;" };
    }
`);

export const InputColumn = styled.div( ({theme, width}) => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: ${width ? width : ""};
`);

export const Link = styled(ReactRouterLink)( ({theme}) => `
    color: #7289da;
    text-decoration: none;
    transition: 0.3s ease all;
    font-weight: bold;

    &:hover
    {
        text-decoration: underline;
    }
`);

export const Toggle = styled.button( ({theme, marginRight}) => `
    // position: absolute;
    // top: -3rem;
    // right: 0;
    background: ${theme.primaryColor2};
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 0.8rem;
    border: 0;
    color: #fff;
    cursor: pointer;
    font-family: Montserrat;
    transition: all 0.3s ease;
    margin-right: ${marginRight ? "0.75rem" : ""};

    &:disabled
    {
        opacity: 0.75;
    }

    &:hover
    {
        transform: scale(0.9);
    }
`);

export const ToggleGroup = styled.div( ({theme}) => `
    position: absolute;
    top: -3rem;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`);

export const ImagePreview = styled.img( ({theme, alone}) => `
    height: 15rem;
    width: 15rem;
    object-fit: cover;
    border-radius: 1rem;
    border: 2px solid ${theme.backgroundColor3};
    padding: 0.5rem;
    margin-top: ${alone ? "" : "-0.5rem" };
`);

export const ImageRemoveIcon = styled.div( ({theme, alone}) => `
    border-radius: 5rem;
    background: ${theme.backgroundColor1};
    border: 2px solid ${theme.backgroundColor3};
    padding: 0.5rem;
    display: flex;
    font-size: 1.25rem;
    justify-content: center;
    align-items: center;
    color: ${theme.textColor2};
    transition: 0.3s ease all;
    position: absolute;
    top: -0.85rem;
    right: -1rem;

    &:hover
    {
        cursor: pointer;
        background: ${theme.backgroundColor3};
        transform: scale(0.9);
    }
`);

export const InputRow = styled.div( ({theme, width}) => `
    width: ${width ? width : "100%"};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`);

export const Tooltip = styled.div( ({theme}) => `
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: 0.5px;
    color: ${theme.textColor3};
    padding-left: 0.5rem;
    cursor: pointer;

    &:hover ${TooltipText}
    {
        display: flex;
        flex-direction: column;
    }
`);

export const TooltipText = styled.div( ({theme}) => `
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: 0.5px;
    background: ${theme.black};
    opacity: 0.75;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    max-width: 15rem;
    text-align: justify;
    color: ${theme.textColor1};
    padding-left: 0.5rem;
    cursor: pointer;
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
`);