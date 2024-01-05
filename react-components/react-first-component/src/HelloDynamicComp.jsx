export function Hello(){
    let age=21;
    let fullname=()=>{
        return "Abhinav Panwar";
    }

    return <h3>
        My name is abhinav, {fullname()} and i am {age} years old
    </h3>
}

export function LogOut(){
    return <button>
        LogOut
    </button>

}

