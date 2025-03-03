import { SidebarPanelComponent } from "../../components/SidebarPanelComponent"
import { ConversationPanelComponent } from '../../components/ConversationPanelComponents'
import { useState } from "react";

const ConversationPanel = () => {
  const [isSidebarOpen, setSideBar] = useState<boolean>(true);

  return (
    <div className='h-screen w-screen flex bg-neutral-800 overflow-hidden'>
      <SidebarPanelComponent trigger = {isSidebarOpen} setTrigger = {setSideBar}/>
      <ConversationPanelComponent trigger = {isSidebarOpen} setTrigger = {setSideBar} />
    </div>
  )
}

export default ConversationPanel