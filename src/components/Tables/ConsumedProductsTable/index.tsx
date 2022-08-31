import './style.css'

import {Link} from 'react-router-dom'

import {Table,Button} from 'react-bootstrap/'

import { useEffect } from 'react'

import { useRecoilState } from 'recoil';
import { consumedProductListAtom } from '../../../atoms/consumedProductListAtom'

import {handleConsumedProductDeletion } from '../../../handlers/handleConsumedProductDeletion'


export const ConsumedProductsTable = () => {
  const [consumedProductList,setConsumedProductList] = useRecoilState(consumedProductListAtom)

  useEffect(() => {
    setConsumedProductList(consumedProductList)
  },[])

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Consumers</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {consumedProductList.map((consumedProduct) =>{
              return(
            <tr>
              <td>{consumedProduct.name}</td>
              <td>{consumedProduct.price}</td>
              <td>{consumedProduct.consumersList.map((consumer) =>{return (consumer + ' ')})}</td>
              <td><Button variant="danger" onClick={(event) => handleConsumedProductDeletion(consumedProduct,consumedProductList,setConsumedProductList) }>Delete</Button></td>
            </tr>
              )
          })} 
        </tbody>
      </Table>
      <br />
      <Button as = {Link} id="add-consumed-product-button" to="/add-consumed-product" variant="success">Add consumed product</Button>
    </div>
    
  );
}
