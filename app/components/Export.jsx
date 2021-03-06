import React, { useState } from 'react'

import { Button, Spinner } from 'react-bootstrap'
import InfoModal from './InfoModal'
import exportResults from '../utils/exportResults'

const Export = ({ job })  => {

  const exportFormats = ['CSV','SQLite','JSON']

  const [showExportChoice, setShowExportChoice] = useState(false)
  const [exportingStatus , setExportingStatus]  = useState('pre')
  
  const preliminaryModalTitle = 'Bitte wählen Sie das Exportformat'
  const [modalTitle , setModalTitle]  = useState(preliminaryModalTitle)
  
  const handleClickExport = () => {
    setShowExportChoice(true)
  }

  const handleClose = () => {
    setShowExportChoice(false)
    setExportingStatus('pre')
    setModalTitle(preliminaryModalTitle)

  }

  const chooseFormatAndExport = (newFormat) => {

    setExportingStatus('cur')
    setModalTitle('Exportieren..')
      
    exportResults(job, newFormat ).then(res => {
      
      setModalTitle(`Schrieb ${res} Reihen`)
      setExportingStatus('post')
    })
      
  }

  const buttonStyle = {
    backgroundColor: '#079992',
    color: 'white',
    margin:'0 0 0 10px'
  }

  const exportButtonStyle = {
    backgroundColor: '#38ada9',
    color: 'white'
  }

  const modalbody =  
    <div>
        {
          exportingStatus === 'cur' ? <Spinner animation="border" role="status" /> : ''
        }
        {
          exportingStatus === 'post' ? <Button style={exportButtonStyle} onClick={handleClose}>Gut!</Button> : ''
        }
        {
          exportingStatus === 'pre' ? exportFormats.map(format =>  <Button style={exportButtonStyle} key={format} onClick={() => chooseFormatAndExport(format) }>{ format }</Button>) : ''
        }
    </div>

  return(
    <div>
        <Button style={buttonStyle} variant="primary" onClick={handleClickExport}>Export tags</Button>
        <InfoModal show={showExportChoice} hide={handleClose} title={modalTitle} body={modalbody}/>
    </div>
  )
}

export default Export