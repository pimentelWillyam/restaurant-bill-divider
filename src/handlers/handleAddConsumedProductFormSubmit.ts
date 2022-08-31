

export const handleAddConsumedProductFormSubmit = (event: React.FormEvent<HTMLFormElement>, productName: string, productPrice: number, productConsumersList: string[], consumedProductList: any[], setConsumedProductList: any) =>{
   event.preventDefault()
   const newConsumedProductList = consumedProductList.concat({name: productName, price: productPrice, consumersList: productConsumersList})
   setConsumedProductList(newConsumedProductList)
   alert('Consumed product registered!')
   return
   
}