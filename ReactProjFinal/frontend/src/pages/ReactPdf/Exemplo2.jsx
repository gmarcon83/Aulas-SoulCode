import React, { useEffect, useState } from "react";
import axios from "axios"
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import moment from "moment";

const styles = StyleSheet.create({
  page: {
    flexDirection: "col",
  },
  section: {
    margin: 5,
    padding: 10,
    fontsize: "11px",
  },
  title: {
    fontSize: "15px",
  },
  rodape: {
    margin: 5,
    padding: 10,
    fontSize: "8px",
    textAlign: "right",
  },
  img: {
    width: 100,
    height: 100,
  },
});

function Exemplo2(props) {
  const dataAtual = new Date();

  const [state, setState] = useState({
    equipamentos: {
      id: "",
      nome: "",
      tel: "",
      createdAt: "",
      updatedAt: "",
      equips: [],
    },
  });

  const id = props.id;

  useEffect(() => {
    axios
      .get(`http://localhost:3003/ordemservico/clientesEquips/${id}`)
      .then((res) => {
        const equipamentos = res.data;
        setState({ equipamentos });
      });
  }, [id]);

  const {equipamentos} = state;
  const {equips} = equipamentos;

  console.log(state)
  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            {/* <Image source={} style={styles.img}></Image> */}
            <Text style={styles.title}>
              Relatório de Clientes e seus equipamentos
            </Text>
            <Text>______________________________________________</Text>
            <Text>Id</Text>
            <Text>Nome</Text>
            <Text>Telefone</Text>
            <Text>Criado</Text>
            <Text>Editado</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Equipamentos</Text>
            <Text>______________________________________________</Text>
            <Text>Id</Text>
            <Text>Nome</Text>
            <Text>Marca</Text>
            <Text>Modelo</Text>
            <Text>Tipo</Text>
            <Text>Criado</Text>
            <Text>Editado</Text>
          </View>
          <View style={styles.rodape}>
            <Text>Equipamentos</Text>
            <Text>SoulCode Academy - Todos os direitos reservados.</Text>
            <Text>R. Helena, 235 - Cila Olimpia, São Paulo - SP</Text>
            <Text>
              Relatório gerado em:{" "}
              {moment(dataAtual).format("DD/MM/YYYY - hh:mm:ss")}
            </Text>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default Exemplo2;
