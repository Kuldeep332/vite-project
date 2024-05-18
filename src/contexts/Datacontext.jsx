
import {createContext,useState} from "react";
export const datacontext=createContext(null);
const  Datacontext=(props)=> {
	const[data, setdata]=useState("Data access globally")
	console.log(props)

	return (
	<datacontext.Provider value={[data,setdata]}>
{props.children}

<h1>sjkgaegkhaghahgah</h1>
	</datacontext.Provider>
	)
  }
  
  export default Datacontext;
  