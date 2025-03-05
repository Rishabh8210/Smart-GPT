import { useEffect, useState } from "react"
import { ResonceShimmerText } from "../ShimmerEffectComponent/ResonceShimmerText"

export const AIResponse = ({ chat }: any) => {
  const [isResponseReceived, setResponseReceived] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setResponseReceived(!isResponseReceived);
      clearTimeout(id);
    }, 3000)
  }, [])
  if(!isResponseReceived)
  return <ResonceShimmerText />

  return (
    <div className="h-fit max-w-[50vw] w-[50vw] flex justify-start">
      <div className="h-fit w-full flex px-4 py-2 ">
        <p className="w-full text-[16px] break-words">{chat.content}</p>
      </div>
    </div>

  )
}
