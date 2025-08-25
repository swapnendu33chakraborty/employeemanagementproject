import React,{useState} from 'react'
const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  

  const submitHandler = (e) => {
       e.preventDefault()
       console.log("email is ",email)
       console.log("password is",password)

        setEmail("")
        setPassword("")
  }
    return (
        <div className = 'flex  h-screen w-screen items-center justify-center'>
          <div className='border-2 border-emerald-600 p-20 '>
            <form 
            onSubmit={(e) => {
              submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
              <input
              value={email}
              onChange={(e) => {
                  setEmail(e.target.value)
                }}
               required
                className='outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 rounded-full placeholder:text-grey-100' type="email" placeholder='Enter your email here' />
              <input
              value={password}
              onChange={(e) => {
                  setPassword(e.target.value)
                }}
               required
                className=' outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 rounded-full mt-3 placeholder:text-grey-100'  type="password" placeholder='Enter your password here' />
              <button className='mt-5-text-white border-none outline-none bg-color-green border-2 bg-emerald-600 py-3 px-5 rounded-full mt-3 placeholder:text-white'>Log in</button>
            </form>  
          </div>
        </div>  

    )   
}
export default Login         



