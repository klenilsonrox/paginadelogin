"use client"
import React from 'react'
import axios from 'axios'
import InputAuth from '../components/InputAuth'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link'

const page = () => {
const [username,setUsername]=React.useState("")
const [erro, setErro] = React.useState("");
const [email,setEmail]=React.useState("")
const [sucess, setSucess] = React.useState("");
const [password,setPassword]=React.useState("")
const [confirmPassword,setConfirmPassword]=React.useState("")
const [cadastrando,setCadastrando]=React.useState(false)

function removeError() {
    setInterval(() => {
      setErro("");
    }, 1000);
  }

  function removeStatus(){
    setInterval(()=>{
        setCadastrando(false);
      setSucess("")
    },3000)
  }

async function handleCadastro(e: any) {
    e.preventDefault();
    setCadastrando(true);
    try {
      await axios.post("https://apiuruarios.onrender.com/api/register", { username,email, password,confirmPassword }).then(res=>{
       setSucess(res.data.message)
      })
      removeError()
  
    } catch (error) {
      setErro( "usuario cadastrado");
      setCadastrando(false)
      removeError();
    } finally {
      // Este bloco será executado independentemente de sucesso ou falha
      removeStatus()
    }
  }


  return (
    <div className="flex items-center w-screen h-[90vh] justify-center bg-gray-700 p-2">
      <form className="max-w-md mx-auto w-screen lg:py-4 px-6 text-gray-200 rounded-md flex flex-col animar bg-[#1A1A1E]">
        <h1 className="text-center py-4 border-b border-gray-600">CADASTRO</h1>
        <InputAuth
          label="Nome "
          id="email"
          place="Seu Nome completo"
          type="text"
          newState={setUsername}
        />
        <InputAuth
          label="Email "
          place="Digite seu email"
          id="email"
          type="email"
          newState={setEmail}
        />

<InputAuth
          label="Senha "
          place="Digite sua senha"
          id="password"
          type="password"
          newState={setPassword}
        />

<InputAuth
          label="Confirme sua senha "
          place="Digite sua senha novamente"
          id="password"
          type="password"
          newState={setConfirmPassword}
        />
{!cadastrando && <button className="bg-[#8234E9] rounded-md my-3 mt-6 text-white py-2 text-2xl" onClick={(e)=>handleCadastro(e)}>
         Cadastrar
        </button>}
        {cadastrando && <button className="bg-[#8234E9] rounded-md my-3 mt-6 flex items-center justify-center text-white py-2 text-2xl" onClick={(e)=>handleCadastro(e)}>
        <div className="border-t-4 rounded-full border-b-4 border-white w-8 h-8 animate-spin"></div>
        </button>}
        {sucess && <p className='text-green-600 font-semibold'>{sucess}</p> }
        {erro && <p className='text-red-600 font-semibold'>{erro}</p> }
        <Link
          href="/login"
          className="max-w-md bg-gray-700 mb-6 hover:bg-gray-600 transition-all flex items-center justify-between rounded-md mt-4 py-4 px-8 "
        >
          <div>
            <p>Ja possui uma conta?</p>
            <p className="text-[#9956F6] font-semibold ">Faça Login</p>
          </div>
          <MdOutlineKeyboardArrowRight className="text-2xl" />
        </Link>
      </form>

    </div>
  )
}

export default page
