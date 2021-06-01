import React, { useEffect, useState } from "react";
import axios from "axios";
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

  const { equipamentos } = state;
  const { equips } = equipamentos;

  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            {/* <Image source={logo} style={styles.img}></Image> */}
            <Text style={styles.title}>
              Relatório de Clientes e seus equipamentos
            </Text>
            <Text>______________________________________________</Text>
            <Text>Id {equipamentos.id}</Text>
            <Text>Nome {equipamentos.nome}</Text>
            <Text>Telefone {equipamentos.telefone}</Text>
            <Text>
              Criado em {moment(equipamentos.createdAt).format("DD/MM/YYYY")}
            </Text>
            <Text>
              Editado em {moment(equipamentos.updatedAt).format("DD/MM/YYYY")}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Equipamentos</Text>
            <Text>______________________________________________</Text>
            {equips.map((data, index) => {
              <View key={index}>
                <Text>Id {data.id}</Text>
                <Text>Nome {data.nome}</Text>
                <Text>Marca {data.marca}</Text>
                <Text>Modelo {data.modelo}</Text>
                <Text>Tipo {data.tipo}</Text>
                <Text>
                  Criado em {moment(data.createdAt).format("DD/MM/YYYY")}
                </Text>
                <Text>
                  Editado em {moment(data.updatedAt).format("DD/MM/YYYY")}
                </Text>
              </View>;
            })}
          </View>
          ;
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
