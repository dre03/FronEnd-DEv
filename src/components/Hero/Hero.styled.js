import styled from "styled-components";

const StyledHero = styled.div`
/* small Screen */
    margin: 1rem;
    
.hero{
    display: flex;
    flex-direction: column;
    text-align: center;
}
.hero__left{
    margin-bottom: 1rem;
}
.hero__title{
    color: #003554;
    margin-top: 4rem;
    font-size: 2.44rem;
}
.hero__genre{
    color: #1b4965;
    margin-bottom: 1rem;
    font-size: 1.59rem;
}
.hero__description{
    color: #6c757d;
    margin-bottom: 1rem;
}
.hero__btn{
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 8px;
    background-color: #1b4965;
    color: white;
}
.hero__btn:hover{
    background-color: #003554;
}
.hero__image{
    max-width: 100%;
    height: auto;
    border-radius: 25px;
}
/* large Screen */
@media (min-width: 920px){
    .container{
        max-width: 1200px;
        margin: 3rem auto;
    }
    .hero{
        margin: 0 1rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }
    .hero__left{
        flex-basis: 50%;
    }
    .hero__right{
        flex-basis: 40%;
    }
}
`
export default StyledHero;