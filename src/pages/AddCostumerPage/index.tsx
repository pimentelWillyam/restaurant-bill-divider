import './style.css'
import { Container,Row } from 'react-bootstrap/';
import { NavigationBar } from '../../components/NavigationBar';
import { AddCostumerForm } from '../../components/Forms/AddCostumerForm/index';

export const AddCostumerPage = () =>{
    return (
        <Container>
            <Row id="add-costumer-page-line-1">
                <NavigationBar />
            </Row>
            <Row id="add-costumer-page-line-2">
                <AddCostumerForm />
            </Row>
        </Container>
    )
}