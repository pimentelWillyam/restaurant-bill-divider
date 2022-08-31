export const handleConsumedProductDeletion = (product: any,consumedProductList: any[], setConsumedProductList: any) =>{
    const newConsumedProductList = consumedProductList.filter((index: any) => index !== product)
    setConsumedProductList(newConsumedProductList)
}