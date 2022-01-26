import styled from 'styled-components';


export const FormContainer=styled.form`
padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;`


    export const Label=styled.label`
    display: flex;
    font-size: 20px;
    font-weight: 700;`

    export const FormButton=styled.button`
    display: block;
    align-items: center;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.06em;
    padding-top: 10px;
    padding-right: 30px;
    padding-bottom: 10px;
    padding-left: 30px;
    border-radius: 4px;
    border: none;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    border-radius: 10px;
    background-color:rgb(255, 204, 221);
    
    &:hover {
        background-color:rgb(255, 102, 153);
    }`

export const FormInput=styled.input`
margin-bottom: 20px;
height: 30px;`