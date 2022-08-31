import './style.css'

import {Form,Button,Container,Row,Col} from 'react-bootstrap';
import {useState} from 'react'

//my imports
import { ConvertedNumberBox } from '../../ConvertedNumberBox';

import {handleRomanNumberFormSubmit} from '../../../handlers/handleRomanNumberFormSubmit'


export const RomanNumberForm = () => {
    const [conversionFormat,setConversionFormat] = useState('Insert conversion format')
    const [numberToBeConverted,setNumberToBeConverted] = useState(null)
    const [convertedNumber,setConvertedNumber] = useState('')
    const [conversionDone,setConversionDone] = useState(false)

    const updateConversionFormat = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        setConversionFormat(event.target.value)
        setConversionDone(false)
    }

    const updateNumberToBeConverted = (event: any) =>{
        setNumberToBeConverted(event.target.value)
        setConversionDone(false)
    }

  return (
    <Container>
        <Row>
          <Col xs={8}>
            <Form id="roman-number-form" onSubmit={(event) => handleRomanNumberFormSubmit(event,conversionFormat,numberToBeConverted,setConvertedNumber,setConversionDone) }>
            <Form.Group className="mb-3">
            <Form.Select onChange={(event) =>{updateConversionFormat(event)}}>
                <option>Insert conversion format</option>
                <option>Arabic to roman</option>
                <option>Roman to arabic</option>
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRomanNumberConversion">
                <Form.Control onChange={(event) =>{updateNumberToBeConverted(event)}} type="text" placeholder="Insert number to be converted" />
            </Form.Group>
                <Button id="button-submit-form" variant="primary" type="submit">Convert</Button>
            </Form>   
          </Col> 
          <Col>
            <ConvertedNumberBox numberToBeConverted = {numberToBeConverted} convertedNumber = {convertedNumber} conversionFormat = {conversionFormat} conversionDone = {conversionDone} />
          </Col>  
        </Row>
      
    </Container>
      
    
  );
}