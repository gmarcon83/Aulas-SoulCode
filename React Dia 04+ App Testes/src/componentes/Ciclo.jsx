import React,{ Component } from "react";


class Ciclo extends Component{
    constructor(props){
        super(props);
        this.state = {
            valor: 0
        }
    }

    componentDidMount(){
        this.setState({
            valor: 1
        })
    }

    render(){
        return(
            <section>
                <h1>Ciclo de vida</h1>
                <p>{this.state.valor}</p>
                <button onClick={
                    () => this.setState({
                        valor: this.state.valor+1
                    })
                }>+1</button>
            </section>
        )
    }
}

export default Ciclo;