import { useState } from "react"

interface ChatName {
  name: string
}

export const ChatButton = ({ name }: ChatName) => {
  const [isHovering, setHovering] = useState<Boolean>(false);
  return (
    <div className="h-fit w-full justify-between items-center flex cursor-pointer hover:bg-neutral-700 rounded-lg" onMouseLeave={() => setHovering(!isHovering)} onMouseEnter={() => setHovering(!isHovering)}>
      <div className="h-fit p-2 w-[95%] overflow-hidden whitespace-nowrap" onClick={() => alert("Ruk jao chat page ban rha")}>
        <p className="text-[13px] bg-gradient-to-r from-white via-white/100 to-white/0 bg-clip-text text-transparent">{name}</p>
      </div>
      {isHovering && <img className="h-3 pr-2 opacity-75 hover:opacity-100" src="ellipsis.png" onClick={() => alert("Option toh hai hi na")} />}
    </div>
  )
}
