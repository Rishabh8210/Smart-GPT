import { IPropData } from "../SidebarPanelComponent"

export const Navbar = ({ trigger, setTrigger }: IPropData) => {
  return (
    <div className="h-fit w-full flex justify-between items-center">
      <div className="h-full w-fit flex">
        {
          !trigger && 
          <span className="h-fit w-fit p-1.5 hover:bg-zinc-700 rounded-lg cursor-pointer" onClick={() => setTrigger(!trigger)}>
            <img className="w-6 opacity-75 invert" src="sidebar.svg" />
          </span>
        } 
        {
          !trigger && 
          <span className="h-fit w-fit p-1.5 hover:bg-zinc-700 rounded-lg cursor-pointer">
            <img className="w-6 opacity-75 invert" src="newconvo.svg" />
          </span>
        }  
        <span className="h-fit w-fit py-[4px] px-4 hover:bg-zinc-700 rounded-lg cursor-pointer">
          <p className="text-[18px] text-white font-medium">Smart GPT</p>
        </span>
      </div>
      
      <div className="h-fit w-fit">
        <p className="text-sm font-semibold text-white">Memory Full</p>
      </div>

      <div className="h-fit w-fit flex gap-2">
        <span className="h-fit w-fit flex items-center justify-center gap-2 py-1.5 px-3.5 hover:bg-zinc-700 border-2 border-zinc-700 rounded-3xl cursor-pointer">
          <img className="h-5" src="upload.png" />
          <p className="text-[14px] text-white">Share</p>
        </span>
        <span className="h-fit w-fit overflow-hidden p-1 hover:bg-zinc-700 rounded-3xl cursor-pointer">
          <img className="w-6 opacity-75" src="user.png" />
        </span>
      </div>
    </div>
  )
}
