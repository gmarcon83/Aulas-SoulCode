import Header from "./componentes/Header";
import Content from "./componentes/Content";
import Footer from "./componentes/Footer";
import {pessoa1, pessoa2} from "./Data";
import "./style.css"

function App(){
  return([
    <Header menu1="Item 1" menu2="Item 2" menu3="Item 3" />,
    <Content pessoa = {pessoa1}/>,
    <Content pessoa = {pessoa2}/>,
    <Footer />
  ])
}

export default App;