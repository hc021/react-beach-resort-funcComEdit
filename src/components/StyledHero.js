import styled from 'styled-components';
import defaultImg from '../images/room-1.jpeg';

//props is the parameter from the npm package "styled-components"
const StyledHero = styled.header`
min-height:60vh;
background:url(${props => props.img ? props.img : defaultImg}) center/cover no-repeat;
display:flex;
align-items:center;
justify-content:center;
`;
// const orange = "#15025";
// const SimpleButton = styled.button`
// color:red;
// background:green;
// font-size:3rem;
// `;


export default StyledHero;