import axios from "axios";
const getOrder=()=>axios.get("http://localhost:9000/orders"
.then(response=>{
    if(response){
        const{data}=response;
        return data
    }
  return [];
}));

export default{
    getOrder
}