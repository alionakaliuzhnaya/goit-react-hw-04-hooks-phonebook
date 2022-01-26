import styled from 'styled-components';

export const ContactItem=styled.li`
display: flex;
justify-content: space-between;
font-size: 20px;
font-weight: 700;
&:not(:last-child) {
    margin-bottom:10px}`


export const ContactButton=styled.button`
display: inline-block;
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
    cursor: pointer;
    border-radius: 10px;
    background-color:rgb(255, 204, 221);
    
    &:hover {
        background-color:rgb(255, 102, 153);

    }`