import React, { useState } from "react";
// import '@flaticon/flaticon-uicons/css/all/all.css';

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const EyeSlashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
  </svg>
);

function Login(){
    const [FirstName ,setFirstName] = useState ('')
    const [LastName ,setLastName] = useState ('')
    const [Email ,setEmail] = useState ('')
    const [PassWord ,setPassword] = useState ('')
    const [ConfirmPassWord ,setConfirmPassword] = useState ('')
    const [Msg ,setMsg] = useState ('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [showPassword , setShowPassword] = useState (false)
    const [showConfirmPassword , setShowConfirmPassword] = useState (false)

    // const login =(e)=>{
    // e.preventDefault();
    // const MsgLogin = FirstName && LastName 
    //  ? `Welcome to our Web Site ${FirstName} ${LastName}`
    //  : ' '
    // setMsg(MsgLogin)
    // }
    // Validation du mot de passe
    const login = (e) => {
        e.preventDefault();
        if (FirstName && LastName && Email && PassWord && ConfirmPassWord) {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(PassWord);
        const hasLowerCase = /[a-z]/.test(PassWord);
        const hasNumber = /\d/.test(PassWord);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(PassWord);

        if (PassWord.length < minLength) {
            setMsg("Le mot de passe doit contenir au moins 8 caractères");
        }
        if (!hasUpperCase) {
            setMsg("Le mot de passe doit contenir au moins une majuscule");
        }
        if (!hasLowerCase) {
            setMsg("Le mot de passe doit contenir au moins une minuscule");
        }
        if (!hasNumber) {
            setMsg("Le mot de passe doit contenir au moins un chiffre");
        }
        if (!hasSpecialChar) {
            setMsg("Le mot de passe doit contenir au moins un caractère spécial (!@#$%^&*...)");
        }
        // return null;
    
        if (PassWord === ConfirmPassWord) {
            setIsLoggedIn(true);
        } else {
            alert("Les mots de passe ne correspondent pas !");
        }
    }
    }
    // Si connecté, afficher la page de bienvenue

if (isLoggedIn) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900">
            <div className="text-center animate-fade-in">
                <div className="mb-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center 
                    justify-center animate-bounce">
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>
                <h1 className="text-6xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Welcome!
                    </span>
                </h1>
                <p className="text-3xl text-white mb-2">
                    {FirstName} {LastName}
                </p>
                <p className="text-gray-400 text-xl mb-8">{Email}</p>
                <button 
                    onClick={() => setIsLoggedIn(false)}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-2xl px-8 py-3 font-semibold
                     text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                    Se déconnecter
                </button>
            </div>
        </div>
    );
  }
  // Si connecté, afficher la page de bienvenue
    return(
    <div className="pt-32 min-h-screen py-12 px-4">
        <div className="text-center mb-12 sm:mb-16 lg:mb-7"> 
        <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">Login to </span><br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">CodeFlow AI</span>
        </h2>
        <p className="text-gray-400 text-base text-1xl sm:text-lg max-w-2xl mx-auto">
            Code smarter, not harder. CodeFlow AI is your AI-powered development assistant. Write professional-quality code, learn new technologies, and accelerate your development workflow. The future of coding starts here.
        </p>
        </div>
        <div className="flex items-center justify-center">  {/* min-h-screen  /   max-w-md*/}
         <div className="w-[600px] h-[430px] text-center bg-slate-800/25 rounded-xl shadow-lg p-8 mb-7 bg-blue-500/10 border border-blue-500/20 shadow-3xl shadow-blue-500/15 lg:scale-3d"> {/*max-w-md*/}
            <form onSubmit={login} className="">
              <div className="relative">
                <input  type="text" 
                        value={FirstName} 
                        onChange={(e)=>setFirstName(e.target.value)} required
                        className="bg-slate-900/50 border border-slate-700 rounded-2xl p-3 w-full text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all duration-300"
                        placeholder="First name"/>
              </div>
              <div className="relative">
                <input type="text" value={LastName} onChange={(e)=>setLastName(e.target.value)} required
                    //    className="bg-slate-950 rounded-2xl p-2 w-[460px] mt-2 focus-visible:bg-slate-900 group-focus-visible:border-slate-900"
                    className="bg-slate-900/50 mt-2 border border-slate-700 rounded-2xl p-3 w-full text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all duration-300"
                       placeholder="Last name"/>
              </div>
              <div className="relative">
                <input  type="email" 
                        value={Email} 
                        onChange={(e)=>setEmail(e.target.value)} required
                        className="bg-slate-900/50 mt-2 border border-slate-700 rounded-2xl p-3 w-full text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all duration-300"
                        placeholder="Email"/>
              </div>
              <div className="relative">
                <input  type={showPassword ? "text" : "password"}
                        value={PassWord} 
                        onChange={(e)=>setPassword(e.target.value)} required
                        className="bg-slate-900/50 mt-2 border border-slate-700 rounded-2xl p-3 w-full text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all duration-300"
                        placeholder="PassWord"/>
                <button type="button"
                        onClick={()=> setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                    {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
                </button>
              </div>

              <div className="relative">
                <input  type={showConfirmPassword ? "text" : "password"} 
                        value={ConfirmPassWord} 
                        onChange={(e)=>setConfirmPassword(e.target.value)} required
                        className="bg-slate-900/50 mt-2 pr-12 border border-slate-700 rounded-2xl p-3 w-full text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all duration-300"
                        placeholder="Confirm PassWord"/>
                <button type="button"
                        onClick={()=> setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                    {showConfirmPassword ? <EyeIcon /> : <EyeSlashIcon />}
                </button>
              </div>
              
                <button type="submit" 
                        // className="bg-gradient-to-b from-blue-500 to-cyan-500 rounded-2xl p-2 w-[460px] mt-2"
                        className="bg-gradient-to-r mt-3 from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-2xl p-3 w-full font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >Login</button>
                <p className="animate-pulse text-red-500 text-center text-1xl font-black">{Msg}</p>
            </form>
           </div>
        </div>
        {/* <p className="animate-bounce mt-2 text-center bg-white-50 text-white-200 text-3xl mb-4.5 font-black hover:text-blue-400">{Msg}</p> */}
        </div>
    )
}
export default Login ;
// animation je peux ajouter : animate-pulse / animate-bounce / animate-ping / animate-spin