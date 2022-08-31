export const calculateRestaurantBill= (costumerName: string, willPayServiceFee: boolean, consumedProductList: any[]) =>{
    var restaurantBill = 0
    var productPrice = 0
    var howManyConsumersAre= 0
    for (let i=0;i<consumedProductList.length;i++){
        if (consumedProductList[i].consumersList.includes(costumerName)) {
            productPrice = consumedProductList[i].price
            howManyConsumersAre = consumedProductList[i].consumersList.length
            restaurantBill+= (productPrice/howManyConsumersAre)
        }
    }
    if (willPayServiceFee){
        return restaurantBill+= restaurantBill/10
    }
    else{
        return restaurantBill;
    }
    
}