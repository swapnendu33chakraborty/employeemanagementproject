import React from 'react'
import Login from './components/auth/login'
import EmployeeDashboard from './components/dashboard/employeedashboard'  
import AdminDashboard from './components/dashboard/admindashboard'
import {setLocalStorage} from './utils/localStorage'
import { useEffect } from 'react'
import {useState } from 'react'


const App = () => {

const[user,setUser] = useState(null)



const handleLogin = (email,password)=>{
  if(email == 'admin@name.com' && password == '123'){
    console.log("This is admin")
  }else{
    alert("Invalid Credentials")
  }
}
handleLogin('admin@name.com',123)

  return (
    <>
    {!user ? <Login />: ''}
    {/*<EmployeeDashboard />*/}
    {/*<AdminDashboard />*/}
    
    </>
  )
}

export default App