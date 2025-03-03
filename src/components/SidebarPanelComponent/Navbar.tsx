
import { IPropData } from "./index"
export const Navbar = ({trigger, setTrigger}: IPropData) => {
  return (
    <div className="w-full h-12 p-2.5 flex justify-between items-center transition-all">
      <div className="h-fit w-fit p-1.5 hover:bg-zinc-700 rounded-lg cursor-pointer" onClick={() => setTrigger(!trigger)}>
        <img className="w-6 opacity-75 invert" src="sidebar.svg" />
      </div>

      <div className="flex w-fit h-fit">
        <div className="h-fit w-fit p-1.5 hover:bg-zinc-700 rounded-lg cursor-pointer">
          <img className="w-6 opacity-75 invert" src="search.svg" />
        </div>

        <div className="h-fit w-fit p-1.5 hover:bg-zinc-700 rounded-lg cursor-pointer">
          <img className="w-6 opacity-75 invert" src="newconvo.svg" />
        </div>
      </div>
    </div>
  )
}
