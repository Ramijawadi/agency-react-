import React from 'react'
import styled from 'styled-components'
import AnimatedShapes from './AnimatedShapes';
import App from  './img/app2.png'

const Container = styled.div`
display : flex ;
@media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }

`;
const Left = styled.div`
width:50%;
@media only screen and (max-width: 480px) {
    display: none;
  }

`;
const Right = styled.div`
width : 50%;
display: flex;
flex-direction : column ;
justify-content : center ;
@media only screen and (max-width: 480px) {
    width: 100%;
  }

`;

const Image = styled.img`

   width:100%;
    margin-top: 154px;
    margin-left: 46px;
    height: 70%;
`;

const Title = styled.span`
font-size:70px;
margin-top: 30px;
@media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`
;
const SubTitle = styled.span`
font-size : 24px;
font-style: italic ;
color : #333;
margin-top:30px;
`
;
const Desc = styled.p `
font-size : 20px ;
color : #777 ; 
margin-top : 30px;
`
;
const Button = styled.button `
width: 150px ; 
border : none ; 
padding : 15px 20px ;
background-color : darkblue ; 
color : white ;
font-size : 20px; 
border-radius : 20px; 
magin-top : 20px ;
cursor : pointer ; 
`;

const features = () => {

    return (



        <Container>
           <Left><Image src={App}/></Left>
           <Right>
               
               <Title>
              <b>good</b>design <br/>
              <b>good</b>business
              </Title>
<SubTitle> We know that good design means good business</SubTitle>
               <Desc> we help our clients succeed by creating brand identities
                    , experiences  and print materials that communicate clearly , achieve their marketting goals , and look fantastic.</Desc>
               <Button >Learn More</Button>
               </Right> 
               <AnimatedShapes />
        </Container>
    )
}

export default features
