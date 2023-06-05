import styled, {css} from "styled-components";


const Button = styled.button`
/* padding: 0.8rem 2rem; */
border: none;
border-radius: 8px;
color: #fff;
cursor: pointer;
text-decoration: none;
:hover{
    background-color: #003554;
}
/* props variant  */
background-color: ${({variant, theme}) => 
    theme.colors[variant] || theme.colors.yellow};

font-size: ${({size, theme}) =>
    theme.buttons[size] || theme.buttons.lg};

/* props full */
${(props) => props.full && css`
    display: block;
    width: 100%;
    padding: 0.8rem 2rem`}
`;
export default Button;