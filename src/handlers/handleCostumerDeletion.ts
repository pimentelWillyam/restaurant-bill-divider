export const handleCostumerDeletion = (costumer: any, costumerList: any,setCostumerList: any) =>{
    const newCostumerList = costumerList.filter((index: any) => index !== costumer)
    setCostumerList(newCostumerList)

}