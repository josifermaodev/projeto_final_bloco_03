import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="relative flex justify-center text-white bg-gray-900 w-full items-center py-4 before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-gradient-to-r before:from-[#00e1ff] before:to-[#00838a] font-roboto">
            <div className="container grid grid-cols-2 text-white gap-4 md:max-lg:grid-cols-1">
                <div className="flex flex-col items-center justify-center gap-4 py-4 text-center">
                    <h2 className="text-5xl font-bold">Seja <span className="bg-gradient-to-r from-[#00e1ff] to-[#00838a] text-transparent bg-clip-text"> Bem Vinde!</span></h2>
                    <p className="text-xl">
                    Aqui você encontra Medicamentos e Cosméticos!
                    </p>
                    <div className="flex justify-around gap-4">
                        <div className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#00d6ff] to-[#00747a] group-hover:from-[#00d6ff] group-hover:to-[#00747a] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-[#00747a] dark:focus:ring-[#00747a]">
                            <Link to={''} className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">Novo Produto</Link>
                        </div>
                    </div>
                </div>
 
                <div className="flex justify-center">
                    <img
                        src="https://ik.imagekit.io/q5tv5x3k8/Farmacia/Pharm%20(1).svg?updatedAt=1740488887436"
                        alt="Imagem da Página Home"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home