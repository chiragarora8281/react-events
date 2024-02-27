// import React from 'react'

// const App = () => {
 
//     let [state, useState] = useState("");
//     let handleKeyboardEvent = e=>{
//     // if(e.key ==='Enter'){
//       if(e.key === "y"){
//       console.log(`you have pressed y key`);
//     }
//   }
//   return (
//     <div>
//       <h1>{state}</h1>
//       <input type="text" 
//       placeholder='type any key'
//       value={state}
//       onKeyUp={handleKeyboardEvent}/>
      
//     </div>
//   )
// }

// export default App;









// import React from 'react'
// import './App.css'
// const App = () => {
//   return (


//     <div>
//       <form action="" onSubmit={e=> {e.preventDefault() ,console.log("hello form ")}}>
//         <input type="text" />
//         <button type='submit'>submit</button>
//       </form>3
//     </div>




// capturing phassse
    // <>
    // <section onClickCapture={e =>
    //  console.log("GP event ")} id='GP'> grand PARNET
    //   <div onClickCapture={e => console.log("P event ") } id='P'>PARENT
    //     <button onClickCapture = { e => {console.log("playing") }} id='C'>CHILD</button>
    //   </div>
    // </section>
    //   </>


      // stop propagation 
    // <>
    // <section onClick={e =>
    //  {console.log("GP event "), e.stopPropagation()}} id='GP'> grand PARNET
    //   <div onClick={e =>{ console.log("P event ") ,e.stopPropagation()}} id='P'>PARENT
    //     <button onClick={e => {console.log("playing"), e.stopPropagation()} } id='C'>CHILD</button>
    //   </div>
    // </section>
    //   </>
      
//   )
// }

// export default App;





















// <==========video6---------------></=>
// import React from 'react'
// import Button from './button'
// const App = () => {
//   return (
//     <div>
//       <button onClick={()=> alert("hello shashi")}>click meeee</button>
//       <span onClick={()=>{alert("hello shaahsi with span tag")}}>click me with span tag</span>

//       <button onTest= {() => alert("hello naming event handler")}>play audi</button>
//       <button onTest= {()=> alert("hello naming event handler")}>play video</button>
     


//     </div>
//   )
// }

// export default App
























//<------------------------------------ video 5=---------------------------------------------------------------------------->


import React from 'react';
import link1 from './Maharani - Karun, Lambo Drive, Arpit Bala & Revo Lekhak (Official Music Video) _ Qabool Hai.mp4'
import link2 from './Sunroof (HD Video) - Jordan Sandhu ft Mxrci _ Joban Cheema _ Latest Punjabi Songs 2023 _ New songs.mp4'
import  AudioBlock from "./components/audioBlock"
const App = () => {
  const audioArr = [{
    link: link1
    ,
    imgUrl : "https://c.saavncdn.com/925/Maharani-Hindi-2021-20220211204609-500x500.jpg",
    song_name : "maharani"
},{
  link: link2,
  imgUrl : "https://png.pngtree.com/thumb_back/fh260/background/20231027/pngtree-hexagonal-abstract-background-with-a-black-textured-surface-image_13704307.png",
  song_name : "punjabi song"
},
];

  return (
    <div>
      
    <AudioBlock audioArr= {audioArr}/>

    </div>
  )
}

export default App














// <-------------video4------------->

// import React from 'react'

// const App = () => {
//   let show=  () =>{
//     console.log("I am show");
//   };
//   let ShowOneMoreTime = ()=>{
//     console.log("one more time show");

//   }
//   let showTyLogo =()=>{
//     console.log("Logo");
//   }
//   let showMenu =()=>{
//     console.log("show Menu");
//   }
//   return (
//     <div>
//       <button onClick={() => {show(), ShowOneMoreTime(), showTyLogo(), showMenu()}}>
//         multiple check
//       </button>
//     </div>
//   )
// }

// export default App









// import React, { useState } from 'react'

// const App = () => {
//   let [isShow, isSetShow] = useState(false);
//   return (
//     <div>
//       <button
//       onMouseEnter={()=> isSetShow(true)}
//       onMouseLeave={()=> isSetShow(false)}>
//       Hover on me will get someething</button>
//       {isShow && (
//         <div>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aut!
//           </p>
//         </div>
//       )}
//     </div>
//   )
// }

// export default App
















// import React from 'react'

// const App = () => {
//   let customEvent = ()=>{
//     let yantra = new Event("red")
//     let body = document.body;
//     body.addEventListener("red",e=>{
//       e.target.style.background = "red"
//       console.log(e.target);

//     })
//     body.dispatchEvent(yantra)
//   }
//   return (
//     <div>
//       <h1>customEvent in reacct</h1>
//       <button onClick={customEvent}>trigger the customEvent </button>
//     </div>
//   )
// }

// export default App






// <---------events video 2------------>








// import React from 'react'

// const App = () => {
  // const event = ()=>{
  //   alert("onclick")

  // }
  // let handleSubmit = e =>{
    // e.preventDefault();
    // console.log(e); // "synthetic  base  =event"
    // explicitly prevent it... you must call preventDefault to overcome browser default 
  //   console.log("hello React");
  // }
  // return (
  //   <div>
  //   <form action="" onSubmit={handleSubmit}>
  //       <input type="text" placeholder="enter text" id="name" />
  //       <button >submit</button>
  //     </form>
  //   </div>

    //   <button onClick={event}>click me</button> // no need of ()brakets to invoke the function directly we can call if we call with brakets they call itself when you run 
    //  <button onClick={()=> alert("hweelo")}>click me</button>
    //  <div>App</div> 
  // )
// }

// export default App


















// import react,{ useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'



// import React, { useState } from 'react'
// import { FaThumbsUp } from "react-icons/fa";
// import { FaThumbsDown } from "react-icons/fa";

// const App = () => {
//     const [username, setUsername] = useState("Q Spiders")
//     const [batches, setBatches] = useState("Morning")
//     const [contact, setContact] = useState("9874563210")
//     const [courseName, setCourseName] = useState("Java Full stack")
//     const [thumb, setThumb] = useState(<FaThumbsUp />)


//   return (
//     <>
//     <nav>
//       <div>
//        <button id='qspy' onClick={()=> [setUsername("Py Spiders"),setBatches("Evening"),setContact("1234567890"),setCourseName("Python development")]}>{username}</button>
//       </div>
//        <div id='details'>
//        <button > batch: {batches}</button> 
//        <button >contact no.: {contact}</button> 
//        <button >course Name: {courseName}</button> 
//        <button id='thumb' onClick={()=> setThumb(<FaThumbsDown />)}>{thumb}</button>
//        </div>
//     </nav>

//     </>
//   )
// }

// export default App

