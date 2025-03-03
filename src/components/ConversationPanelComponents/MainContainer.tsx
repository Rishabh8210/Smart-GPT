import { useState } from "react"
import { InputBtn } from "./InputBtn"

export const MainContainer = () => {
  const [chats, setchats] = useState<any[]>([]);

  if (chats.length == 0) {
    return (
      <div className="h-[80%] wfull flex flex-col justify-center items-center gap-4 overflow-hidden">
        <h1 className="text-4xl font-semibold text-white">What can i help you?</h1>
        <InputBtn setChats = {setchats}/>
      </div>
    )
  }

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="h-[80%] bg-amber-400 wfull flex flex-col justify-center items-end gap-4 overflow-hidden">

      </div>
      <InputBtn setChats = {setchats}/>
    </div>
  )
}
