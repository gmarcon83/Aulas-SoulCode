import React from 'react';
import PageTitle from "../components/PageTitle"
import SectionTitle from '../components/SectionTitle';


function Home() {
  return(
    <>
      <h1>Home</h1>
      <PageTitle title="Seja Bem Vindo!" subtitle="Escolha um exemplo."/>
      <SectionTitle title="Seção" />
    </>
  )
}

export default Home;