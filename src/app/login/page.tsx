"use client";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import InputAuth from "../components/InputAuth";




interface ErrorResponse {
  message: string;
}

const loginPage = () => {
 const [erro, setErro] = React.useState<ErrorResponse | null>(null);
  const [sucess, setSucess] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [logando,setLogando]= React.useState(false);

  function removeError() {
    setInterval(() => {
      setErro(null);
    }, 3000);
  }

  function removeStatus(){
    setInterval(()=>{
      setLogando(false);
      setSucess("")
    },2000)
  }

  async function handleLogin(e: any) {
    e.preventDefault();
    setLogando(true);
    try {
      await axios.post("https://apiuruarios.onrender.com/api/login", { email, password }).then(res=>{
       setSucess(res.data.message)
      })
      
      removeError();
    } catch (error) {
      setErro(error.response?.data.message || "Erro desconhecido");
      removeError();
    } finally {
      // Este bloco será executado independentemente de sucesso ou falha
      removeStatus()
    }
  }

  return (
    <div className="flex items-center w-screen h-[90vh] justify-center bg-gray-700 p-2">
      <form className="max-w-md mx-auto w-screen lg:py-4 px-6 text-gray-200 rounded-md flex flex-col bg-[#1A1A1E] animar">
        <h1 className="text-center py-4 border-b border-gray-600">LOGIN</h1>
        <InputAuth
          label="Email :"
          id="email"
          place="Digite seu email"
          type="text"
          newState={setEmail}
        />
        <InputAuth
          label="Senha :"
          place="Digite sua senha"
          id="password"
          type="password"
          newState={setPassword}
        />
        <Link href="/forgout" className="text-[#9956F6] mt-2">
          Esqueci minha senha
        </Link>
        {!logando && <button className="bg-[#8234E9] rounded-md my-3 text-white py-2 text-2xl" onClick={(e)=>handleLogin(e)}>
         Entrar
        </button>}
        {logando && <button className="bg-[#8234E9] rounded-md my-3 text-white py-2 text-2xl">
            Aguarde...
        </button>}
        {sucess && <p className="text-green-600 font-semibold">{sucess}</p> }
        {erro && <p className="text-red-600 font-semibold">{erro}</p> }
        <div className="max-w-md border-b border-gray-600 my-4"></div>

        <Link
          href="/cadastro"
          className="max-w-md bg-gray-700 mb-6 hover:bg-gray-600 transition-all flex items-center justify-between rounded-md mt-4 py-4 px-8 "
        >
          <div>
            <p>Não tem conta?</p>
            <p className="text-[#9956F6] font-semibold ">Se inscreva</p>
          </div>
          <MdOutlineKeyboardArrowRight className="text-2xl" />
        </Link>
      </form>
    </div>
  );
};

export default loginPage;
