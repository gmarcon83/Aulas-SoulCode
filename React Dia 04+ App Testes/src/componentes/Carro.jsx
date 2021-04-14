import React from "react";

class Carro extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            texto: "Clique para mostrar"
        };
        this.revelar = this.revelar.bind(this);
    }

    revelar(){
        this.setState({
            texto: `Marca: ${this.props.marca} - Modelo: ${this.props.modelo}\n - Ano: ${this.props.ano}`
        })
    }

    render(){
        return(
            <>
                <h1>{this.state.texto}</h1>
                <button onClick={this.revelar}>Clique Aqui</button>
            </>
        )
    }


}
//marca modelo ano
export default Carro;