import styled from "@emotion/styled";


const FormEl = styled.form`
outline: 1px solid lightgrey;
padding: 20px;
background-color: #eee;

width: 300px;

`
const Label = styled.label`
display: flex;
flex-direction: column;
font-weight: 500;
color: red;
margin-bottom: 20px;
`
const Input = styled.input`
padding: 10px;
color: black;
border-radius: 10px;
outline: none;
margin-top: 10px
`
const Button = styled.button`
color: #fff;
background-color: tomato;
border: none;
padding: 15px 30px;
border-radius: 10px;
cursor: pointer;
margin: 0 auto;
font-weight: 500;
font-size: 15px;

&:hover{
    background-color: rgb(245, 76, 46);}
`
export {FormEl, Label, Input, Button}