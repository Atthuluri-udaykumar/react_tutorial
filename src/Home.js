import { useState } from 'react'
import About from "./About";




export default function Home({sub,count,add,dummy}) {
  console.log('hello ');

    return (

        <div>
            <button onClick={sub}>sub</button>
            <h1> count :- {count} </h1>
            <h1>this is dumy state {dummy}</h1>
            <button onClick={add}>add</button>

        </div>
    )
}

// useState
//=> it will help us to maitain states 
// if(){}else{}



// props is help to communicate once to another comp (p=>C)

//useState initial state dicleration,
//we can assign any data type to that state 

