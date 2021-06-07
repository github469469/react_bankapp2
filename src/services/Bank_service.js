import axios from 'axios'
const baseUrl =  "http://localhost:8000"

const login = (data)=>{
 
    console.log(data);
return axios.post(baseUrl+"/login",data,{

        withCredentials:true
    })

}
const Deposit = (data)=>{

    return axios.post(baseUrl+"/login",data,{
    
            withCredentials:true
        })
    
    }


 const getUsers = (data)=>{

    return axios.get(baseUrl+"/user",data,{

        withCredentials:true
    })
}

  
 export default{

    login,
     Deposit,
     getUsers
}