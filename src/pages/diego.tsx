import Link from "next/link"
import Image from "next/image"

export default function navbar() {

    return (
    <>  
        <aside className="bg-white w-[240px] h-full fixed">
            {/* Logo NutriAmbiental */}
            <div className="flex flex-row items-center m-3 mb-10 gap-2 font-extrabold">
                <Image src="/favicon.ico" height={48} width={48} alt="logo"></Image>
                <span> NutriAmbiental </span>
            </div>
            {/* NavBar */}
            <nav className="flex flex-col items-start space-y-4">
                <li className="relative flex items-center pl-9 gap-5 w-full h-9 hover:bg-[#90f599] transition">
                <Image src="avaliacao.svg" width={14} height={16} alt="logo"></Image>
                <Link href="/">Dashboard</Link>

                {/* Pseudo-elemento para a borda interna */}
                <div className="absolute inset-0 border-l-4 border-[#5C9134] opacity-0 hover:opacity-100 transition duration-200"></div>
                </li>
                <li className="relative flex items-center pl-9 gap-5 w-full h-9 hover:bg-[#90f599] transition">
                <Image src="avaliacao.svg" width={14} height={16} alt="logo"></Image>
                <Link href="/">Avaliação</Link>

                {/* Pseudo-elemento para a borda interna */}
                <div className="absolute inset-0 border-l-4 border-[#5C9134] opacity-0 hover:opacity-100 transition duration-200"></div>
                </li>
                <li className="relative flex items-center pl-9 gap-5 w-full h-9 hover:bg-[#90f599] transition">
                <Image src="avaliacao.svg" width={14} height={16} alt="logo"></Image>
                <Link href="/">Recordatório</Link>
                {/* Pseudo-elemento para a borda interna */}
                <div className="absolute inset-0 border-l-4 border-[#5C9134] opacity-0 hover:opacity-100 transition duration-200"></div>
                </li>
                <li className="relative flex items-center pl-9 gap-5 w-full h-9 hover:bg-[#90f599] transition">
                <Image src="avaliacao.svg" width={14} height={16} alt="logo"></Image>
                <Link href="/">Alimentos</Link>
                {/* Pseudo-elemento para a borda interna */}
                <div className="absolute inset-0 border-l-4 border-[#5C9134] opacity-0 hover:opacity-100 transition duration-200"></div>
                </li>
                <li className="relative flex items-center pl-9 gap-5 w-full h-9 hover:bg-[#90f599] transition">
                <Image src="avaliacao.svg" width={14} height={16} alt="logo"></Image>
                <Link href="/">Chat</Link>
                {/* Pseudo-elemento para a borda interna */}
                <div className="absolute inset-0 border-l-4 border-[#5C9134] opacity-0 hover:opacity-100 transition duration-200"></div>
                </li>
                <li className="relative flex items-center pl-9 gap-5 w-full h-9 hover:bg-[#90f599] transition">
                <Image src="avaliacao.svg" width={14} height={16} alt="logo"></Image>
                <Link href="/">Prescrição</Link>
                {/* Pseudo-elemento para a borda interna */}
                <div className="absolute inset-0 border-l-4 border-[#5C9134] opacity-0 hover:opacity-100 transition duration-200"></div>
                </li>
                <></>
                <div className="w-full h-1 bg-gray-200 mt-20"></div>
            </nav>
            
        </aside>

        <div className="min-h-screen ml-[240px] bg-[#BEEBC259] p-4">
            
            <p className="font-mulish text-lg">Avaliação</p> 

            <div className="w-100 h-96 grid grid-cols-4 gap-4 bg-white rounded mt-4">
                <div className="col-span-4 mt-8 ml-8 flex flex-col items-start gap-2  ">
                    <label htmlFor="sexo">Nome</label>
                    <input type="text" id="Nome" className="border border-gray-300 rounded-md px-2 py-2 w-3/4" />
                </div>
                <div className="col-span-2 ml-8 flex flex-col items-start gap-2">
                    <label htmlFor="sexo">Email</label>
                    <input type="text" id="Email" className="border border-gray-300 rounded px-2 py-2 w-5/6" />
                </div>
                <div className="col-span-2 flex flex-col items-start gap-2">
                    <label htmlFor="sexo">Telefone</label>
                    <input type="text" id="Telefone" className="border border-gray-300 rounded px-2 py-2" />
                </div>
                <div className="ml-8 flex flex-col items-start gap-2">
                    <label htmlFor="sexo">Data de nascimento</label>
                    <input type="text" id="Data_nascimento" className="border border-gray-300 rounded px-2 py-2" />
                </div>
                <div className="flex flex-col items-start gap-2">
                    <label htmlFor="sexo">Idade</label>
                    <input type="text" id="Idade" className="border border-gray-300 rounded px-2 py-2" />
                </div>
                <div className="col-span-2 flex flex-col items-start gap-2">
                    <label htmlFor="sexo">Sexo</label>
                    <input type="text" id="sexo" className="border border-gray-300 rounded px-2 py-2" />
                </div>
            </div>

        </div>
    </>  
    )
}