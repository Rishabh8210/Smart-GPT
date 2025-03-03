import { useState } from "react"
interface IChatInput{
  setChats: (val:number[]) => void
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
      <button className=" absolute right-2 bottom-2 h-fit w-fit p-1.5 bg-white rounded-full cursor-pointer" onClick={() => {
          setChats([22])
          setSearchText('');
        }}>
        <img className="w-6" src="search.svg" />
      </button>
    </div>
  )
}

