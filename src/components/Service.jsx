import React ,{useState} from 'react'
import styled from 'styled-components'
import Girl from './img/girl.png'
import MiniCard from './MiniCard';
import Play from  './img/play.png';



const Container  = styled.div  `
display : flex ;
height : 100% ;
@media only screen and (max-width: 480px) {
  flex-direction: column;
}

`;

const Left = styled.div  `
width : 50%;
position :relative  ;
@media only screen and (max-width: 480px) {
  display: none;
}
`;

const Right = styled.div  `
width : 50%;
@media only screen and (max-width: 480px) {
  width: 100%;
`;
const Image = styled.img`
display: ${(props) => props.open && "none"}; //if open is true make display none 
margin-top:120px;
height : 100%;
width : 90%;
margin-left : 100px ;


`
; 


const Video = styled.video`
display: ${(props) => !props.open && "none"}; //if open is true make display none 
height : 300px ;
position : absolute ;
top: 0 ;
bottom : 0;
margin : auto ;
right : 0 ;
@media only screen and (max-width: 480px) {
  width: 100%;
`; 

const Wrapper  = styled.div `

padding : 50px;
display : flex ; 
flex-direction : column  ;
@media only screen and (max-width: 480px) {
  padding: 20px;

`;

const Title = styled.h1`



`;
const Desc = styled.p`

font-size:20px;
margin-top : 20px;
color :#555 ;

`;

const CardContainer = styled.div `
display : flex ;
justify-content: space-between;
margin-top : 50px;



`;

const Button = styled.button`
  
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 18px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icon = styled.img `
width : 20px ;
mardin-right : 10px ;
padding-right : 13px;

`;

const Modal = styled.div`

width : 100vw ;
height : 100vh ; 
position : absolute  ;
left :0 ;
top :0; 
background-color : rgba(0,0,0,0.5);


`;

const CloseButton = styled.button `
position : asolute ; 
background-color : white ; 
padding: 5px ; 
border : none ; 
border-radius : 5px ;
margin-left: 330px;
top : 30% ;


`;


const Service = () => {
    const [open , setOpen] = useState(false);
    const smallScreen  = window.screen.width <= 480 ? true : false ;

    return (
        <Container >
              <Left>
                <Image  open={open} Image src={Girl}/>
                <Video  open={open}  
                  autoPlay loop  
                  controls 
                   src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761" />
              </Left>
            <Right>

    <Wrapper>

            <Title>Simple process to start</Title>
            <Desc>We provide deigital experience services to startups and small
                business to looking for a partner of their digial medi , design 
                & developpment , lead generation ans communication requirents. we work with  you  not for you.Althrough we have a great resources
                </Desc>
        <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />

        </CardContainer>
        <Button onClick={() => setOpen(true)} >
            <Icon src={Play}/>
            How it works
            </Button>
            </Wrapper>

                    </Right>

{smallScreen && open && (
  <Modal>

  <Video open={open}  
                  autoPlay 
                  loop  
                  controls 
                  src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"  />


<CloseButton onClick = {()=>setOpen(false)}>Close</CloseButton>
  </Modal>

)}

                </Container >
    )


    }



export default Service
