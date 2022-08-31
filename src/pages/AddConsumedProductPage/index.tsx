import './style.css'

import {Container,Row} from 'react-bootstrap'

import { NavigationBar } from '../../components/NavigationBar'
import { AddConsumedProductForm } from '../../components/Forms/AddConsumedProductForm'

export const AddConsumedProductFormPage = () =>{
    return(
        <Container id="add-consumed-product-page">
            <Row id="add-consumed-product-page-line-1">
                <NavigationBar />
            </Row>
            <Row id="add-consumed-product-page-line-2">
                <AddConsumedProductForm />
            </Row>
            
        </Container>
    )
}