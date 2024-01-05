import {Hello} from "./HelloDynamicComp";
import { LogOut } from "./HelloDynamicComp";
function DemoButton(){
return <p style={{background:"green"}}>
<button>
    Like it 
</button>
<Hello></Hello>
<LogOut></LogOut>
</p>
}

export default DemoButton;