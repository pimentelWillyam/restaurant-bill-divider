import './style.css'

import {handleAddConsumedProductFormSubmit} from '../../../handlers/handleAddConsumedProductFormSubmit'

import {Form,Button} from 'react-bootstrap';

import {useState} from 'react'

import { useRecoilState, useRecoilValue } from 'recoil';
import {consumedProductListAtom} from '../../../atoms/consumedProductListAtom'
import {costumerListAtom} from '../../../atoms/costumerListAtom'

export const AddConsumedProductForm = (props: any) =>{
    const [productName,setProductName] = useState('')
    const [productPrice,setProductPrice] = useState(0)
    const [productConsumersList,setProductConsumersList] = useState([])
    const costumerList = useRecoilValue(costumerListAtom)
    const [consumedProductsList,setConsumedProductsList] = useRecoilState(consumedProductListAtom)


    const updateProductName = (event: React.ChangeEvent<any>) =>{
        setProductName(event.target.value)
    }
    const updateFoodPrice = (event: React.ChangeEvent<any>) =>{
        setProductPrice(event.target.value)
    }
    const updateProductConsumersList = (event: React.ChangeEvent<any>,costumerName: string) =>{
        if (event.target.checked){
            const newProductConsumersList = productConsumersList.concat(costumerName)
            setProductConsumersList(newProductConsumersList)
            console.log(newProductConsumersList)
        }
        else{
            console.log("removed")
            const newProductConsumersList = productConsumersList.filter((productConsumer: any) => productConsumer!= costumerName)
            setProductConsumersList(newProductConsumersList)
            console.log(newProductConsumersList)
        }
    }

    return(
        <Form id="add-consumed-product-form" onSubmit={(event) => handleAddConsumedProductFormSubmit(event,productName,productPrice,productConsumersList,consumedProductsList,setConsumedProductsList) }>
            <Form.Group className="mb-3" controlId="formRomanNumberConversion">
                <Form.Control onChange={(event) =>{updateProductName(event)}} type="text" placeholder="Insert food name" />
            </Form.Group>
            <Form.Group>
                <Form.Control onChange={(event) =>{updateFoodPrice(event)}} type="text" placeholder="Insert food price" />
            </Form.Group>
            <br />

            <Form.Group>
                <Form.Label>Select the costumers that will consume the product</Form.Label>
                {
                    costumerList.map((costumer) =>{
                        return(
                            <Form.Check label={costumer.name} type="checkbox" onChange={(event) =>{updateProductConsumersList(event,costumer.name)}}/>
                        )
                    })
                }    
            
                
                
                
            </Form.Group>
            
            <br />
                <Button id="button-submit-form" variant="success" type="submit">Add</Button>
        </Form>
    )
}