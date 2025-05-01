import { useState } from "react"
import DisplayState from "@/components/DisplayState";
import Header from "@/components/Header";

export default function UseState(){
	let[value, setValue] = useState<number>(0);
	//let value = 10;

	return (
		<div>
			<Header/>
			User state
			<DisplayState value={value} function={setValue}></DisplayState>
		</div>
	)
}