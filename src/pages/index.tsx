import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { api } from "~/utils/api";

export default function Home() {
  // NOTE: (CDG) aqui um exemplo de chamada usando tRPC
  const teste = api.example.teste.useQuery();
  const [nome, setNome] = useState('Ambiental')

  return <h1>alimentos</h1>
    
      
}

