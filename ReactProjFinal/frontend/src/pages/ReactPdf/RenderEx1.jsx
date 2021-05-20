import React from 'react'
import {PDFViewer} from '@react-pdf/renderer'
import Exemplo1 from "./Exemplo1"

function RenderEx1() {
  return (
    <PDFViewer>
      <Exemplo1 />
    </PDFViewer>
  )
}

export default RenderEx1

