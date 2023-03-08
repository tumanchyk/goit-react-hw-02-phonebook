import styled from "@emotion/styled";

const ContactItem = styled.li`
list-style: square;
padding: 10px;
`
const ButtonDelete = styled.button`
font-size: 12px;
border-radius: 5px;
padding: 4px 10px;
border: 1px solid lightgrey;
cursor: pointer;
margin-left: 10px;
&:hover{
    background-color: #fff;
}
`
export{ContactItem, ButtonDelete}