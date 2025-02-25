import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { buscar, deletar } from "../../../service/Service";
import Modal from "../../modal/Modal";
import { ToastAlerta } from "../../../utils/ToastAtert";


function DeletarCategoria() {
    const navigate = useNavigate();

    const [categorias, setCategorias] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id } = useParams<{ id: string }>();

    const [isOpen, setIsOpen] = useState<boolean>(true); // Controla a abertura do modal


    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategorias)
        } catch (error: any) {
            alert('Erro ao buscar a categoria')
        }
    }

    useEffect(() => {
        if (id !== undefined) {
          buscarPorId(id);
        }
    }, [id]);

    async function deletarCategoria() {
        setIsLoading(true);
    
        try {
          await deletar(`/categorias/${id}`);
    
          ToastAlerta("Categoria apagado com sucesso", "sucesso");

        } catch (error: any) {
            ToastAlerta('Erro ao deletar a categoria', "erro")
        }
    
        setIsLoading(false);
        retornar();
    }
    

    function retornar() {
        setIsOpen(false); // Fecha o modal ao invés de navegar
        navigate("/categorias");
      }

    return (
        <Modal isOpen={isOpen} onClose={retornar}>
            <h1 className="text-4xl text-center my-4">Deletar tema</h1>
            <p className="text-center font-semibold mb-4">
                Você tem certeza de que deseja apagar categoria a seguir?
            </p>
            <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
                Categoria
                </header>
                <p className="p-8 text-3xl bg-slate-200 h-full">{categorias.nome}</p>
                <div className="flex">
                <button
                    className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
                    onClick={retornar}
                >
                    Não
                </button>
                <button
                    className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center"
                    onClick={deletarCategoria}
                >
                    {isLoading ? (
                    <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                    />
                    ) : (
                    <span>Sim</span>
                    )}
                </button>
                </div>
            </div>
        </Modal>
    )
}

export default DeletarCategoria;
