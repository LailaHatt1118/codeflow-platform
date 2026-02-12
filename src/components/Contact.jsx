import { PhoneCall, Mail } from "lucide-react";
import { useState } from "react";

function Contact() {
    const [FullName, setFullName] = useState("");
    const [Email, setEmail] = useState("");
    const [Message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Merci ${FullName}, votre message a été envoyé !`);
        setFullName("");
        setEmail("");
        setMessage("");
    }

    return ( 
        <section className="relative min-h-screen flex flex-col md:flex-row md:items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="max-w-7xl mx-auto text-center relative w-full md:w-1/2 md:pr-8 lg:pr-12">
                <div>
                    <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
                        <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">Contact us</span>
                    </h1>
                    
                    <div className="inline-flex flex-col sm:inline-flex sm:flex-row sm:items-center sm:space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-2xl mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700">
                        <span className="text-xs xs:text-sm sm:text-base text-blue-300 mb-2 sm:mb-0">
                            We're here to help and answer any question you might have. 

                        <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 sm:mt-0">
                            <div className="mt-2 inline-flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                                <PhoneCall className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-400"/>
                                <span className="text-xs xs:text-sm sm:text-sm md:text-sm text-blue-300">+212 638-392738</span>
                            </div>
                            
                            <div className=" mt-2 inline-flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                                <Mail className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-400"/>
                                <span className="text-xs xs:text-sm sm:text-sm md:text-sm text-blue-300">codeflowaiplatform@gmail.com</span>
                            </div>
                        </div>
                        </span> 
                    </div>
                </div>
            </div>

            <div className="relative w-full md:w-1/2 mt-8 md:mt-0">
                <div className="flex items-center justify-center">
                    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-[500px] xl:w-[600px] h-auto sm:h-[300px] md:h-[350px] text-center bg-slate-800/25 rounded-xl shadow-lg p-4 sm:p-6 md:p-8 mb-4 sm:mb-7 bg-blue-500/10 border border-blue-500/20 shadow-3xl shadow-blue-500/15">
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                value={FullName} 
                                onChange={(e) => setFullName(e.target.value)} 
                                placeholder="Full Name"
                                className="bg-slate-900/50 mt-2 border border-slate-700 rounded-2xl p-3 w-full text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all duration-300 text-sm sm:text-base"
                            />
                            
                            <input 
                                type="email" 
                                value={Email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="Email Address"
                                className="bg-slate-900/50 mt-2 border border-slate-700 rounded-2xl p-3 w-full text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all duration-300 text-sm sm:text-base"
                            />
                            
                            <textarea 
                                value={Message} 
                                onChange={(e) => setMessage(e.target.value)} 
                                placeholder="Message"
                                className="bg-slate-900/50 mt-2 border border-slate-700 rounded-2xl p-3 w-full text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all duration-300 text-sm sm:text-base"
                                rows="3"
                            />
                            
                            <button 
                                type="submit"
                                className="bg-gradient-to-r mt-3 from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-2xl p-3 w-full font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                
                <p className="text-center text-xs xs:text-sm sm:text-base md:text-md lg:text-lg text-gray-400 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed px-2 sm:px-0">
                    We are delighted to help you! Feel free to contact us with any questions, suggestions, or requests for assistance. Your satisfaction is our priority.
                </p>
            </div>
        </section>
    )
}

export default Contact;