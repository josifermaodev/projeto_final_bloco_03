import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
    let data = new Date().getFullYear();

    return (
        <>
            <div className="flex justify-center w-full  bg-gray-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-lg font-bold">Blog Pessoal Josiane | Copyright: {data}</p>
                    <p className="text-lg">Acesse minhas redes sociais</p>
                    <div className="flex gap-4 pt-1">
                        <a className="hover:text-[#00d6ff]" href="https://www.linkedin.com/in/josiane-fermao/" target="_blank"><LinkedinLogo size={48} weight='regular' /></a>
                        <a className="hover:text-[#00d6ff]" href="https://github.com/josifermaodev" target="_blank"><GithubLogo size={48} weight='regular' /></a>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Footer