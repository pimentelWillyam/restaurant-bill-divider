import {BrowserRouter,Routes,Route} from 'react-router-dom'

//pages
import { RestaurantBillDividerPage } from './pages/RestaurantBillDividerPage'
import { AddConsumedProductFormPage } from './pages/AddConsumedProductPage'
import { AddCostumerPage } from './pages/AddCostumerPage'

export const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>          
                <Route path='' element={<RestaurantBillDividerPage/>} />
                <Route path='add-consumed-product' element={<AddConsumedProductFormPage/>} />
                <Route path='add-costumer' element={<AddCostumerPage/>} />
            </Routes>
        </BrowserRouter>
                
    )
}