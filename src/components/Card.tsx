
interface cardPros {
	product: string;
	value: number;
	descont: number;
	func: any;
	children: any
}


export default function Card(props:cardPros) {
	return (
		<div className={`flex flex-col border-4 ${props.descont > 0 ? 'border-black-700' : 'border-green-700'} border-black rounded-sm p-1`}>
			<p>Produto: {props.product}</p>
			<p>Preço: {props.value} Kz</p>
			{props.descont > 0 && 
			(
				<div>
					<p>Desconto: {props.descont} Kz</p>
					<p>Valor de venda: {props.func(props.value, props.descont)} Kz</p>
				</div>
			)
			}
			<div>
				{props.children}
			</div>
		</div>
	)
}