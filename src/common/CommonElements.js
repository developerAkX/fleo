import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled.button`
border-radius: 8px;
background: #DF581E;
padding: 10px 22px;
color: #fff;
outline: none;
font-weight:700;
border: none;
cursor: pointer;
box-shadow: inset 0px 4px 4px rgba(255, 255, 255, 0.25);
transition: all 0.2s ease-in-out;
text-decoration: none;
font-family: 'Mulish', sans-serif;
/* Second Nav */
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #56402A;
}
`;


export const IconBG = styled.div`
border-radius: 8px;
height:45px;
width:45px;
background: #DF581E;
display: flex;
align-items: center;
justify-content: center;
outline: none;
`;