/**
 * Props (properties)
 * ini adalah sebuah data dari parent component ke child component
 * 
 */

/**
 * State
 * State adalah data yang bisa berubah dalam sebuah component
 * 
 * Cara menggunakan state :
 * 1. import useState dari react
 * 2. inisialisasi state kamu
 * 3. kamu bisa menggunakan
 */

import { useState } from "react";
import Greeting from "./Components/Greeting";
import Counter from "./Components/Counter";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      
      <Greeting name ="Ujang"/>
      <h1>Ujang</h1>
      
      <h2>Count : {count}</h2>
      <button
      onClick = {
        () => setCount(count + 1)
      }> +
      </button>
      <Counter initialValue = {10}/>
    </div>
  )
}

// function App() {
//   return (
//     <div>
//       <Greeting name ="Ujang"/>
//       <h1>Ujang</h1>
//     </div>
//   )
// }

export default App