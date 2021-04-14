import React from "react";

class Content extends React.Component {
    render() {
        const { nome, idade, formacao, status } = this.props.pessoa
        return (
            <section className="conteudo">
                <p>Nome: {nome}</p>
                <p>Idade: {idade} </p>
                <p>Formacao: {formacao} </p>
                <p>Status: {status} </p>
            </section>
        );
    }
}

export default Content;
