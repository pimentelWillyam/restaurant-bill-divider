import './style.css'

import {handleAddCostumerFormSubmit} from '../../../handlers/handleAddCostumerFormSubmit'

import {useState} from 'react'

import {useRecoilState} from 'recoil'
import {costumerListAtom} from '../../../atoms/costumerListAtom'

import {Form,Button} from 'react-bootstrap'

export const AddCostumerForm = () =>{
    const [costumerName,setCostumerName] = useState('')
    const [willPayServiceFee,setWillPayServiceFee] = useState(false)
    const [costumerList,setCostumerList] = useRecoilState(costumerListAtom)

    const updateCostumerName = (event: React.ChangeEvent<any>) =>{
        setCostumerName(event.target.value)
    }

    const updateWillPayServiceFee = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setWillPayServiceFee(!willPayServiceFee)
    }

    return(
        <Form id="add-costumer-form" onSubmit={(event) => handleAddCostumerFormSubmit(event,costumerName,willPayServiceFee,costumerList,setCostumerList) }>
            <Form.Group className="mb-3" controlId="add-costumer-form">
                <Form.Control onChange={(event) =>{updateCostumerName(event)}} type="text" placeholder="Insert costumer's name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onChange = {(event) =>{updateWillPayServiceFee(event)}} type="checkbox" label="Will pay the service fee" />
            </Form.Group>
            <br />
                <Button id="button-submit-form" variant="success" type="submit">Add</Button>
        </Form>
    )
}