import { Button, Input, Text } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc';
import { BiRightArrowAlt } from "react-icons/bi"
import { Link } from 'react-router-dom';
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { login } from '../features/User/userSlice';
import firebase from "firebase"
import { auth } from '../firebase';
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(login({
      email: email,
      password: password,
      loggedIn: true
    }))
    auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in 
        console.log("user")
        // ...
      })
      .catch((error) => {
        console.log("error")
        // ..
      });
  }
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-[#0e8afd]'>
      <div className='flex flex-col items-center bg-white p-32 rounded-md gap-5'>
        <Text className='font-bold text-3xl'>Login</Text>
        <div className='flex flex-col items-center'>
          <div className='border-2 border-gray-300 flex items-center pl-5 pr-5 pt-1 pb-1 gap-2 cursor-pointer'>
            <FcGoogle />
            <Text className='font-semibold text-sm'>Sign in with Google</Text>
          </div>
        </div>
        <text>Or</text>
        <div>
          <form className='flex flex-col gap-5' onSubmit={(e) => handleSubmit(e)}>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email" />
            <Input
              type="password"
              value-={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password' />
            <Button type="submit">Login</Button>
          </form>
        </div>
        <Link to="/register">
          <div className='flex items-center gap-2 hover:text-gray-400 cursor-pointer'>
            <p>Register to Login</p>
            <BiRightArrowAlt />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Login