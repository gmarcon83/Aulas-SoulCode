import React from "react";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

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
});

function Exemplo1() {
  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
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
            <Text style={styles.title}>
              Equipamentos
            </Text>
            <Text>______________________________________________</Text>
            <Text>Id</Text>
            <Text>Nome</Text>
            <Text>Marca</Text>
            <Text>Modelo</Text>
            <Text>Tipo</Text>
            <Text>Criado</Text>
            <Text>Editado</Text>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default Exemplo1;
