import { useEffect, useState } from "react";


function Counter(){
//mengembalikan sepasang value (array); [0, fungsi()]
    const [angka, setAngka] = useState(0);

    function addAngka(){
        setAngka(angka + 1)
    }

    function updateDOM(){
        console.log("Lifecycle: Component dimount");
        document.title = `Result: ${angka}`;
    }
    // useEffek: melakukan side effect
    useEffect(updateDOM, [angka]);
        console.log("Lifecycle: Component dirender");

    return(
        <div>
            <p>Hasil {angka}</p>
            <button onClick={addAngka}>Add</button>
        </div>
    )
}

export default Counter;