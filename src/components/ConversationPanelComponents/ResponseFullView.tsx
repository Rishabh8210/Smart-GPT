import { dmmyLongContent } from '../../constants'
import ReactMarkdown from 'react-markdown'
import '../../styles/ResponseFullView.css'

interface IResponseFullView{
    trigger:number,
    setTrigger: (val:number) => void
}

const ResponseFullView = ({trigger, setTrigger} : IResponseFullView) => {
  return (
    <div className='absolute top-0 pt-4 left-0 flex flex-col items-center bg-neutral-800 w-screen h-screen z-10 overflow-hidden gap-5'>
        <div className='h-fit w-full px-15 flex items-center justify-between'>
            <h1 className='text-xl font-semibold border-b-4 w-fit'>Chat GPT</h1>
            <button className='text-xl p-1.5 cursor-pointer px-4 rounded-xl font-bold hover:bg-zinc-700' onClick={() => setTrigger(-1)}>X</button>
        </div>
        <div className='response-style h-full w-full flex justify-center overflow-y-scroll'>
            <div className='w-[70%] h-full'>
                <ReactMarkdown>{dmmyLongContent}</ReactMarkdown>
            </div>
        </div>
    </div>
  )
}

export default ResponseFullView