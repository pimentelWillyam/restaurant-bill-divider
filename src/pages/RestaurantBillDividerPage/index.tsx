import './style.css'

import {Container,Row} from 'react-bootstrap/';

import {NavigationBar} from '../../components/NavigationBar'
import {ConsumedProductsTable } from '../../components/Tables/ConsumedProductsTable'
import {CostumersTable } from '../../components/Tables/CostumersTable'

export const RestaurantBillDividerPage = () =>{
    return(
        <Container>
            <Row id="restaurant-bill-divider-line-1">
                <NavigationBar />
            </Row>
            <Row id="restaurant-bill-divider-line-2">
                <CostumersTable />
            </Row>
            <Row id="restaurant-bill-divider-line-3">
                <ConsumedProductsTable />
            </Row>

            
        </Container>
    )
}