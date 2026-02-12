import { Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    const location = useLocation();
    
    // Vérifier si on est sur la page login ou contact
    const isLoginPage = location.pathname === '/login';
    const isContactPage = location.pathname === '/Contact';
    
    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    <div className="flex items-center space-x-2 group cursor-pointer">
                        <img src="/AI.png" alt="logo image" className="w-[50px] h-[50px] rounded-full" />
                        <span className="text-lg sm:text-xl md:text-4xl font-medium">
                            <span className="text-white">Code</span>
                            <span className="text-blue-400">Flow</span>
                        </span>
                    </div>

                    {/* Nav Links Desktop */}
                    <div className="hidden sm:flex items-center space-x-2 sm:space-x-4 lg:space-x-8 absolute left-1/2 transform -translate-x-1/2">
                        {isLoginPage || isContactPage ? (
                            // Afficher seulement "Home" sur la page login et la page contact
                            <Link to="/" className="text-gray-300 hover:text-white text-sm lg:text-base">
                                Home
                            </Link>
                        ) : (
                            // Afficher les liens normaux sur les autres pages
                            <>
                                <a href="#features" className="text-gray-300 hover:text-white text-sm lg:text-base">Features</a>
                                <a href="#pricing" className="text-gray-300 hover:text-white text-sm lg:text-base">Pricing</a>
                                <a href="#testimonials" className="text-gray-300 hover:text-white text-sm lg:text-base">Testimonials</a>
                                <Link to="/login" className="text-gray-300 hover:text-white text-sm lg:text-base">Login</Link>
                                <Link to="/Contact" className="text-gray-300 hover:text-white text-sm lg:text-base">Contact</Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="sm:hidden p-2 text-gray-300 hover:text-white" 
                        onClick={() => setMobileMenuIsOpen((prev) => !prev)}
                    >
                        {mobileMenuIsOpen ? (
                            <X className="w-5 h-5 sm:w-6 sm:h-6" /> 
                        ) : (
                            <Menu className="w-5 h-5 sm:w-6 sm:h-6"/>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuIsOpen && (
                <div className="sm:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
                    <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                        {isLoginPage || isContactPage ? (
                            <Link to="/" onClick={() => setMobileMenuIsOpen(false)} className="block text-gray-300 hover:text-white text-sm lg:text-base">
                                Home
                            </Link>
                        ) : (
                            <>
                                <a href="#features" onClick={() => setMobileMenuIsOpen(false)} className="block text-gray-300 hover:text-white text-sm lg:text-base">Features</a>
                                <a href="#pricing" onClick={() => setMobileMenuIsOpen(false)} className="block text-gray-300 hover:text-white text-sm lg:text-base">Pricing</a>
                                <a href="#testimonials" onClick={() => setMobileMenuIsOpen(false)} className="block text-gray-300 hover:text-white text-sm lg:text-base">Testimonials</a>
                                <Link to="/login" onClick={() => setMobileMenuIsOpen(false)} className="block text-gray-300 hover:text-white text-sm lg:text-base">Login</Link>
                                <Link to="/Contact" onClick={() => setMobileMenuIsOpen(false)} className="block text-gray-300 hover:text-white text-sm lg:text-base">Contact</Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav> 
    );
}