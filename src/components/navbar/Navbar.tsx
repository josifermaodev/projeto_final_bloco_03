import { MagnifyingGlass, ShoppingCartSimple, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
    

    return (
        <div className="flex justify-center bg-gray-900 w-full text-white h-30 items-center flex-col">
            <div className="container flex justify-between items-center">
                <div className="">
                    <Link to={'/home'}><img className="w-[8rem]" src="https://ik.imagekit.io/q5tv5x3k8/Farmacia/Pharm.svg?updatedAt=1740487702154" alt="Logo"/></Link>
                </div>
                <div className="flex justify-center">
                    <form className="flex justify-center items-center max-w-sm mx-auto w-full">   
                        <label htmlFor="search" className="sr-only">Search</label>
                        <div className="relative w-[100vw]">
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00969d] focus:border-[#00969d] block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#00969d] dark:focus:border-[#00969d]" placeholder="Pesquisar Jogo" required />
                        </div>
                        <button type="submit" className="inline-flex items-center p-2.5 ms-2 text-sm font-medium text-white bg-gradient-to-r from-[#00ffff] to-[#00969d] hover:brightness-90 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:brightness-90 dark:focus:ring-blue-800 rounded-full">
                            <MagnifyingGlass size={20}/>
                        </button>
                    </form>
                </div>
                <div>
                    <nav className="flex gap-4 ">
                        <User size={32} className="hover:text-[#00747a]"/>
                        <ShoppingCartSimple size={32} className="hover:text-[#00747a]"/>
                    </nav>
                </div>
            </div>
            <div className="p-2 w-full">
                <nav className="flex justify-center gap-20">
                    <a href="#" className="relative group text-white text-lg">
                        Produtos
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-[#00ffff] to-[#00969d] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <Link to='/categorias' className="relative group text-white text-lg">Categorias<span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-[#00ffff] to-[#00969d] transition-all duration-300 group-hover:w-full"></span></Link>
                    <Link to='/cadastrarcategoria' className="relative group text-white text-lg">Cadastrar Categoria <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-[#00ffff] to-[#00969d] transition-all duration-300 group-hover:w-full"></span></Link>
                </nav>
            </div>

        </div>
    )
}

export default Navbar;