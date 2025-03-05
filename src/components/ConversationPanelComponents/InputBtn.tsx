import { useState } from "react"
interface IChatInput{
  setChats: (val:any) => void
}
export const InputBtn = ({setChats}:IChatInput) => {
  const [searchText, setSearchText] = useState('')
  return (
    <div className="relative max-h-30 w-[50vw] overflow-hidden rounded-2xl border-2 border-zinc-300 p-2">
      <textarea
        className="h-24 w-full p-2 text-lg rounded-2xl focus:outline-0 text-white 
               resize-none overflow-auto bg-transparent"
        placeholder="Ask anything"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
      <button className=" absolute right-2 bottom-2 h-fit w-fit p-1.5 bg-white hover:bg-zinc-400 rounded-full cursor-pointer" onClick={() => {
          if(searchText.length != 0){
            setChats((prev:any) => [...prev, {name:'user', content:searchText}])
            setChats((prev:any) => [...prev, {name:'gpt', content:'Js is a widely used programming language which is use to manipulte websites, pages'}])
            setSearchText('');
          }
        }}>
        <img className="w-6" src="search.svg" />
      </button>
    </div>
  )
}

