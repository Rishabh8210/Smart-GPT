import { useRef, useEffect } from 'react'

export const useChatScroll = (message:any[]) => {
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if(ref.current){
      const { scrollHeight, clientHeight } = ref.current;
      ref.current.scrollTo({
        top: scrollHeight - clientHeight*1.25,
        behavior: "smooth",
      });
    }
  }, [message])
  
  return ref
}