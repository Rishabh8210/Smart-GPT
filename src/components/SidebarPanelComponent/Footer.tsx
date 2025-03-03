
export const Footer = () => {
  return (
    <div className="w-full h-fit p-2.5 flex justify-center items-center gap-3 cursor-pointer hover:bg-neutral-700 rounded-lg">
        <span className="h-fit w-fit">
            <img className="h-5 opacity-75" src="stars.png" />
        </span>
        <span className="h-fit w-fit text-white">
            <p className="text-[15px]">Upgrage to Plus</p>
            <p className="text-[10px]">More access to the plus</p>
        </span>
    </div>
  )
}
