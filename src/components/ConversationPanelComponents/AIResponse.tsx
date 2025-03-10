import { useEffect, useState } from "react"
import { ResonceShimmerText } from "../ShimmerEffectComponent/ResonceShimmerText"
import { ResponseBox } from "./ResponseBox";

export const AIResponse = ({ chat, ref }: any) => {
  const [isResponseReceived, setResponseReceived] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setResponseReceived(!isResponseReceived);
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        behavior: 'smooth'
      })
      clearTimeout(id);
    }, 5000)
  }, [])
  if(!isResponseReceived)
  return <ResonceShimmerText />

  return (
    <div className="h-fit max-w-[50vw] w-[50vw] flex flex-col justify-start">
      <div className="h-fit w-full flex px-4 py-2 ">
        <p className="w-full text-[16px] break-words">{chat.content}</p>
      </div>
      <ResponseBox />
    </div>
  )
}
