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
            <nav className="flex flex-col items-start">
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
                <div className="w-full h-1 bg-gray-200"></div>
            </nav>
            
        </aside>

        <div className="min-h-screen ml-[240px] bg-[#BEEBC259] p-4">
                <h1>Alimentos</h1>
                {/* Coloque aqui o restante do conteúdo da sua página */}
            </div>
    </>  
    )
}