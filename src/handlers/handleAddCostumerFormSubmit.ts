export const handleAddCostumerFormSubmit = (event: React.FormEvent<HTMLFormElement>, costumerName: string, willPayServiceFee: boolean, costumerList: any, setCostumerList: any) =>{
    event.preventDefault();
    const newCostumerList = costumerList.concat({name: costumerName, willPayServiceFee: willPayServiceFee, consumersList: []})
    setCostumerList(newCostumerList)
    alert('Costumer registered!')
     return 
}