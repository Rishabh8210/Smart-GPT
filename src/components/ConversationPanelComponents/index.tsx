import { IPropData } from "../SidebarPanelComponent"
import MainContainer from "./MainContainer"
import { Navbar } from "./Navbar"

export const ConversationPanelComponent = ({ trigger, setTrigger }: IPropData) => {
  return (
    <div className="h-full w-full p-1.5 px-3 flex flex-col items-center">
      <Navbar trigger={trigger} setTrigger={setTrigger} />
      <MainContainer />
    </div>
  )
}
