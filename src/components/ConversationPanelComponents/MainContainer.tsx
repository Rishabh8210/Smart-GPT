import { useState } from "react"
import { InputBtn } from "./InputBtn"

export const MainContainer = () => {
  const [chats, setchats] = useState<any[]>([]);

  if (chats.length == 0) {
    return (
      <div className="h-[80%] w-full flex flex-col justify-center items-center gap-4 overflow-hidden">
        <h1 className="text-4xl font-semibold text-white">What can i help you?</h1>
        <InputBtn setChats={setchats} />
      </div>
    )
  }

  return (
    <div className="h-full w-full flex flex-col justify-center items-center overflow-hidden">
      <div className="h-[80%] p-4 w-full flex flex-col items-center text-white gap-4 overflow-auto">
        {
          chats.length != 0 && chats.map((chat, ind) => {
            if (ind % 2) {
              return (
                <div className="h-fit w-[50vw] flex justify-start">
                  <div className="h-fit w-full flex px-4 py-2 ">
                    <p>{chat.content}</p>
                  </div>
                </div>

              )
            } else {
              return (
                <div className="h-fit w-[50vw] flex justify-end">
                  <div className="h-fit w-[60%] flex px-4 py-2 bg-zinc-700 rounded-2xl">
                    <p className="">{chat.content}</p>
                  </div>
                </div>
              )
            }

          })
        }
      </div>
      <InputBtn setChats={setchats} />
    </div>
  )
}
