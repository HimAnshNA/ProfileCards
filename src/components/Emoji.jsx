import { useState } from "react"


function Emoji() {

const [emoji,setEmoji] = useState("\u{1F60A}")


  return (
    <>
    <div className="min-h-screen flex items-center  flex-col ">
        <h1 className="text-2xl font-bold text-gray-800 mt-10">
Emoji Mood Selector</h1>
    
  <div className="h-32 w-96 flex justify-center items-center ">  <h1 className="text-5xl">{emoji}</h1></div>
   
<div className="flex gap-2">
<button onClick={()=>setEmoji("\u{1F60A}")} className="h-7  w-20  rounded-lg bg-gradient-to-r from-orange-500 to-pink-300 drop-shadow-xl hover:drop-shadow-xl">Happy</button>
<button onClick={()=>setEmoji("\u{1F622}")} className="h-7  w-20  rounded-lg bg-gradient-to-r from-orange-500 to-pink-300 drop-shadow-xl hover:drop-shadow-xl">sad</button>
<button onClick={()=>setEmoji("\u{1F621}")} className="h-7  w-20  rounded-lg bg-gradient-to-r from-orange-500 to-pink-300 drop-shadow-xl hover:drop-shadow-xl">Angry</button>
<button onClick={()=>setEmoji("\u{1F929}")} className="h-7  w-20  rounded-lg bg-gradient-to-r from-orange-500 to-pink-300 drop-shadow-xl hover:drop-shadow-xl">Excited</button>

</div> 
   {/* <h1>{`\u{1F60A}`}</h1> */}
    </div>
    </>
  )
}

export default Emoji
