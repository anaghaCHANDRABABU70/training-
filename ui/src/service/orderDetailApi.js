import axios from "axios";
const getOrder=()=>axios.get("http://localhost:9000/orders/?orderNo=UAU0031447").then(response=>{
    if(response){
        const {data}=response;
        console.log(response);
        
        console.log(data,"kkkkk");
        return data
    }
  return [];
});
const updateOrderList=(requestData)=>axios.put('http://localhost:9000/orders',
requestData).then(response=>{
    if(response){
        const {data}=response;
        return data
    }
    return[];
});
export default{
    getOrder,updateOrderList
}