import styled from "styled-components";

const StyledMovie = styled.div`
    margin-bottom: 1rem;
    img{
        border-radius: 25px;
        max-width: 100%;
        height: auto;
        margin-bottom: 1rem;
    }

    h3{
        font-size: 1.95rem;
        margin-bottom: 0.5rem;
    }
    h3 a{
        text-decoration: none;
        color: #1b4965;
    }

    p{
        color: #6c757d;
        font-size: 1.2rem;
    }
    /* medium Screnn  */
    @media (min-width: 768px){
        flex-basis: 50%;
}
    /* Large Screen */
    @media (min-width: 992px){
        flex-basis: 25%;
        padding: 1rem;
}
`
export default StyledMovie;