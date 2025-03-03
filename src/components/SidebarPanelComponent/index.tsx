import { Navbar } from "./Navbar"
import { randomChats } from "../../constants"
import { Footer } from "./Footer"
import { ChatButton } from "./ChatButton"

export interface IPropData {
  trigger: boolean,
  setTrigger: (val:boolean) => void
}

export const SidebarPanelComponent = ({trigger, setTrigger}: IPropData) => {
  
  if(!trigger) return
  return (
    <div className="h-full w-[240px] flex flex-col items-center bg-neutral-900">
      <Navbar trigger = {trigger} setTrigger = {setTrigger}/>
      <div className="w-full h-[85%] text-white p-2.5 flex flex-col justify-between items-center overflow-y-auto">
        {
          randomChats.map((chat) => {
            return (
              <ChatButton {...chat} />
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
}
