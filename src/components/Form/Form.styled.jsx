import styled from "@emotion/styled";


const FormEl = styled.form`
background-color: #eee;
margin: 0 auto;
padding: 30px 20px;
display: flex;
flex-direction: column;
align-items: center;
`
const Label = styled.label`
display: flex;
flex-direction: column;
font-weight: 500;
color: #2c2525;
font-size: 18px;
margin-bottom: 20px;
`
const Input = styled.input`
padding: 10px;
color: black;
margin-left: -3px;
border-radius: 50px;
border: 1px solid lightgrey;
width: 300px;
outline: none;
margin-top: 10px
`
const Button = styled.button`
color: #fff;
background-color: tomato;
border: none;
padding: 12px 30px;
border-radius: 50px;
cursor: pointer;
margin: 0 auto;
font-weight: 500;
font-size: 15px;

&:hover{
    background-color: rgb(245, 76, 46);}
`
export {FormEl, Label, Input, Button}