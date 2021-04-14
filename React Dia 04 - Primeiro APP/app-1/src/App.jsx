import Header from "./componentes/Header";
//import Content from "./componentes/Content";
import Footer from "./componentes/Footer";
//import {pessoa1, pessoa2} from "./Data";
import "./style.css"
//import CustomClass from "./componentes/CustomClass";
import Carro from "./componentes/Carro";

function App(){
  return([
    //<Header menu1="Item 1" menu2="Item 2" menu3="Item 3" />,
    // <CustomClass />,
    // <CustomClass />,
    // <Content pessoa = {pessoa1}/>,
    // <Content pessoa = {pessoa2}/>,
    <Carro marca="Ford"  modelo="Ka" ano="2012"/>,
    //<Footer />
  ])
}

export default App;