import{useContext} from "react"
import { datacontext } from "./contexts/Datacontext"
 const App=()=> {
const [data,setdata]=useContext(datacontext)
console.log(data)
  return (
  <div>
    app
  </div>
  )
}

export default App
