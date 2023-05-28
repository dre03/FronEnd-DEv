import styled from "styled-components";

const StyledNavbar = styled.div`
    /* small Screen */
        background-color: #1b4965;
        padding: 1rem;
        color: white;
    nav{
        display: flex;
        flex-direction: column;
    }
    h1{
        font-size: 2.4rem;
        margin-bottom: 1rem;
    }
    ul{
        display: flex;
        flex-direction: column;
        list-style: none;
    }
    .li{
        margin-bottom: 1rem;
    }

    li a {
        color: #fff;
        text-decoration: none;
    }

    /* Medium Screen*/
    @media(min-width: 768px) {
        nav{
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        h1{
            margin-bottom: 0;
        }
        ul{
            flex-direction: row;
        }
        li{
            margin: 1rem;
        }
    }
`
export default StyledNavbar;