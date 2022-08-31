import './style.css'

import { useState } from 'react'

import {Link} from 'react-router-dom'

import {Table,Button} from 'react-bootstrap/'

import { useEffect } from 'react'

import { useRecoilState,useRecoilValue } from 'recoil'
import { consumedProductListAtom } from '../../../atoms/consumedProductListAtom'
import { costumerListAtom } from '../../../atoms/costumerListAtom'

import { handleCostumerDeletion } from '../../../handlers/handleCostumerDeletion';
import {calculateRestaurantBill} from '../../../helpers/calculateRestaurantBill'

export const CostumersTable = () => {
  const [costumerList,setCostumerList] = useRecoilState(costumerListAtom)
  const consumedProductList = useRecoilValue(consumedProductListAtom)
  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>will pay service fee</th>
            <th>Total do pay</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            costumerList.map((costumer: any) =>{
              return(
                
          <tr>
            <td>{costumer.name}</td>
            <td>{JSON.stringify(costumer.willPayServiceFee)}</td>
            <td>R${calculateRestaurantBill(costumer.name,costumer.willPayServiceFee,consumedProductList)}</td>
            <td><Button variant="danger" onClick={event => handleCostumerDeletion(costumer,costumerList,setCostumerList)}>Delete</Button></td>
          </tr>
              )
            })
          }
          
        </tbody>
      </Table> 
      <br />
      <Button as = {Link} id="add-consumed-product-button" to="/add-costumer" variant="success">Add costumer</Button>
      </div>
  );
}
