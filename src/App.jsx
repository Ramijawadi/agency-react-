

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import styled , {css} from "styled-components";
import Features from "./components/Features";
import Service from "./components/Service";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Container= styled.div`
height : 100vh ;
overflow: hidden ;
position : relative ;
`
;

const Shape = css `

width : 100%;
height : 100%;
position : absolute ;
top:0;
z-index : -1 ;

`
;


const IntoShape = styled.div`
${Shape}
clip-path: polygon(67% 0, 100% 0, 100% 100%, 55% 100%);
background-color: crimson ;

;`

const FeatureShape = styled.div`
${Shape}
clip-path: polygon(0 0, 55% 0, 33% 100%, 0 100%);
background-color: pink  ;

;`

const ServiceShape = styled.div`
${Shape}
clip-path: polygon(0 0, 33% 0, 33% 100%, 0 100%);
background-color: #f88497  ;

;`

const PriceeShape = styled.div`
${Shape}
clip-path: polygon(20% 0, 100% 0, 100% 100%, 65% 100%);
background-color: crimson ;

;`

const  App = () => {

const smallScreen  = window.screen.width <= 480 ? true : false ;

  return (
  <>
<Container>
  <Navbar/>
  <Intro/>
  <IntoShape/>
  </Container>

  <Container>
    <Features />
    <FeatureShape />
  </Container>

  <Container>
    <Service />
    {!smallScreen &&  <ServiceShape />}
  </Container>

  <Container>
    <Price />
    <PriceeShape />
  </Container>

  <Container>
  <Contact />
  <Footer />
  </Container>
</>
  );
}

export default App;
