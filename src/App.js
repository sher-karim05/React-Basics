/* eslint-disable react/jsx-no-undef */
import './App.css';
import Apples from './Apples';
import Bag from './Components/Bag';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Pear from './Components/Pear';
import Sidebar from './Components/Sidebar';
import ExprProps from './ExprProps';

function App(){
  const bool = false;
  return(
    <>
    <Nav name="About"/>
    <Sidebar name="images"/>
    <Bag childern={<Apples color="red" number="5"/>}/>
    <Bag childern={<Pear friend="Zilan"/>}/>

      <Bag>
        <Apples color="yellow" number="6"/>
      </Bag>
      <ExprProps toggleBoolean={!bool}/>
    <Footer/>
    </>
  )
}

export default App;
