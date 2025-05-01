import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/Header';
import Card from "@/components/Card";

const name = 'Manuel Mazunga de Almeida'
let learn = "React com next.js, so good!"


const products = [
  {
    id: 1,
    product: "Mouse",
    value: 5000,
    descont: 0,
    disponible: true
  },
  {
    id: 2,
    product: "Teclado",
    value: 12000,
    descont: 0,
    disponible: true
  },
  {
    id: 3,
    product: "Monitor",
    value: 30000,
    descont: 0,
    disponible: true
  },
  {
    id: 4,
    product: "CPU",
    value: 100000,
    descont: 0,
    disponible: true
  },
  {
    id: 5,
    product: "Cx.Som",
    value: 15000,
    descont: 0,
    disponible: true
  },
  {
    id: 6,
    product: "Microfone",
    value: 18000,
    descont: 100,
    disponible: true
  }
]

function calculateDescont(value:number, descont:number){
  return value - descont;
}

function calculateDescont1(value:number, descont:number){
  return value - descont / 2;
}

export default function Home() {
  return (
    <main>
      <Header/>
      <div style={teste}>
        <p style={{color: 'red', backgroundColor: '#eee'}}>Let's go code</p>
        <p>Step by step but every day</p>
      </div>
    </main>
  );
}

const teste = {
  display: 'flex',
  justifyContent: 'center',
  aligntItems: 'center',
  color: '#00f',
  backgroundColor: '#eee',
  fontSize: '20px'
}