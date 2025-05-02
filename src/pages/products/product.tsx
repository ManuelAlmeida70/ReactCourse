import Card from "@/components/Card"
import Header from "@/components/Header"
import {useRouter} from "next/router";

const products = [
	{
	  product: "Mouse",
	  value: 5000,
	  descont: 0,
	  disponible: true
	},
	{
	  product: "Teclado",
	  value: 12000,
	  descont: 0,
	  disponible: true
	},
	{
	  product: "Monitor",
	  value: 30000,
	  descont: 0,
	  disponible: true
	},
	{
	  product: "CPU",
	  value: 100000,
	  descont: 0,
	  disponible: true
	},
	{
	  product: "Cx.Som",
	  value: 15000,
	  descont: 0,
	  disponible: false
	},
	{
	  product: "Microfone edge",
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

export default function PageProduct ()
{
	const router = useRouter();
	const parameters = router.query;
	console.log(parameters);
	return (
		<div>
			<Header/>
			<div className="flex justify-center gap-3">
				{
				  products.map((e:any)=>{
					if (e.disponible){
					return (
					  <Card key={e.id} product={e.product} value={e.value} descont={e.descont} func={calculateDescont}>
						<div>Teste Curso de React by Mazunga</div>
					  </Card>
					)
					}
				  })
				}
		</div>
		</div>
	)
}
