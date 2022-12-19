import { Button, Input, Text, useToast } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { selectUserName, setUserLogin } from "../features/User/userSlice";
import { ChatState } from "../Context/ChatProvider";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const { user }: any = ChatState();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "api/user/login",
        { email, password },
        config
      );
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      window.location.reload();
      navigate("/chat");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {!user && !user ? (
        <div className="flex flex-col justify-center items-center h-screen bg-[#0e8afd]">
          <div className="flex flex-col items-center bg-white p-32 rounded-md gap-5">
            <Text className="font-bold text-3xl">Login</Text>
            <div className="flex flex-col items-center">
              <div className="border-2 border-gray-300 flex items-center pl-5 pr-5 pt-1 pb-1 gap-2 cursor-pointer">
                <FcGoogle />
                <Text className="font-semibold text-sm">
                  Sign in with Google
                </Text>
              </div>
            </div>
            <Text>Or</Text>
            <div>
              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => handleSubmit(e)}
              >
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <Input
                  type="password"
                  value-={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <Button type="submit">Login</Button>
              </form>
            </div>
            <Link to="/register">
              <div className="flex items-center gap-2 hover:text-gray-400 cursor-pointer">
                <p>Register to Login</p>
                <BiRightArrowAlt />
              </div>
            </Link>
          </div>
        </div>
      ) : (
        navigate("/chat")
      )}
    </>
  );
};

export default Login;
