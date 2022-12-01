import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { FcGoogle } from "react-icons/fc"
import { BiLeftArrowAlt } from "react-icons/bi"
import { Link } from 'react-router-dom'
import db, { auth } from './../firebase';
import firebase from "firebase";
import { useToast } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
interface UserData {
  id: any,
  data: any
}
const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repassword, setRePassword] = useState("")
  const [file, setFile] = useState("")
  const [values, setValues] = useState<UserData[]>([])
  const UserData = values?.map((datas) => datas.id)
  const navigate = useNavigate()
  const toast = useToast()
  const [show, setShow] = useState(false)
  const [shows, setShows] = useState(false)
  const handleClick = () => setShow(!show)
  const handleClicks = () => setShows(!shows)
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setValues(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      )
    );
  }, []);
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      var response = await auth.createUserWithEmailAndPassword(email, password)
      console.log(response)
      values.map((data) => data?.data?.email === email ? toast({
        title: 'Email Error',
        description: "The Email is already registered",
        status: 'error',
        duration: 9000,
        isClosable: true,
      }) : db.collection("users").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        name: username,
        email: email,
        password: password,
        repassword: repassword
      }))
      toast({
        title: 'User Registered',
        description: "You have been registered",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      auth.createUserWithEmailAndPassword(email, password).then(user => {
        // db.collection("userChats").doc(user?.uid).set({})
        console.log("successfull")
      }).catch((error) => {
        console.log(error)
      })
      navigate(`/login`)
      setUsername(" ")
      setEmail(" ")
      setPassword(" ")
      setRePassword(" ")
    }
    catch (err) {
      console.log(err)
    }
  }

  const postDetails = (e: any | null) => {

  }
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-[#0e8afd]'>
      <div className='flex flex-col items-center bg-white p-32 rounded-md gap-5'>
        <Text className='font-bold text-3xl'>Register</Text>
        <div className='flex flex-col items-center'>
          <div className='border-2 border-gray-300 flex items-center pl-5 pr-5 pt-1 pb-1 gap-2 cursor-pointer'>
            <FcGoogle />
            <Text className='font-semibold text-sm'>Sign in with Google</Text>
          </div>
        </div>
        <text>Or</text>
        <div className=' p-5'>
          <form className='flex flex-col gap-5 ' onSubmit={(e) => handleSubmit(e)} >
            <Input
              variant='outline'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username" />
            <Input
              variant='outline'
              type="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username" />
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                value={repassword}
                onChange={(e) => setRePassword(e.target.value)}
                type={shows ? 'text' : 'password'}
                placeholder='Enter password'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClicks}>
                  {shows ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormControl>
              <FormLabel>Upload your Picture</FormLabel>
              <Input
                type="file"
                p={1.5}
                accept="image/*"
                onChange={(e) => e.target.files && e.target.files?.length > 0 && postDetails(e.target.files[0])}
              />
            </FormControl>
            <Button type="submit">Submit</Button>
          </form>
        </div>
        <Link to="/login">
          <div className='flex items-center gap-2 hover:text-gray-400 cursor-pointer'>
            <BiLeftArrowAlt />
            <p>Return to Login</p>
          </div>
        </Link>

      </div>
    </div >
  )
}

export default Register