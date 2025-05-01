interface DisplayState{
	value: number,
	function: any
}

export default function DisplayState(props:DisplayState){

	function operation(type:number){
		let c = props.value;
		
		if ( c > 0)
			c += type;
		props.function(c);
	}

	return (
		<div className="flex flex-col justify-center items-center p-5 rounded-md bg-zinc-300">
			<div className={`flex bg-zinc-700 justify-center items-center w-[200px] mb-5 ${props.value > 5 ? 'text-red-500' : 'text-green-500'}`}>
			{props.value}
			</div>
			<div className="flex gap-5">
				<button className="btnDefault" onClick={()=>operation(1)}>add</button><br/>
				<button className="btnDefault" onClick={()=>operation(-1)}>sub</button>
			</div>
		</div>
	)
}