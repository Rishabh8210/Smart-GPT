import { useState } from 'react'
import { aiResponses } from '../../constants'
import ResponseFullView from './ResponseFullView'
export const ResponseBox = () => {
	const [isResponseFullViewOpen, setResponseFullView] = useState(-1);
	return (
		<>
			<div className="h-fit w-full px-4 py-6 flex justify-evenly gap-5 flex-wrap bg-zinc-900 rounded-3xl">
				{
					aiResponses.map((response, ind) => {
						return (
							<div key={ind} onClick={() => {
								setResponseFullView(ind)
							}} className="h-60 w-[48%] p-3 relative overflow-hidden rounded-2xl bg-zinc-700 cursor-pointer">
								<span>
									<h1 className="text-2xl font-semibold">{ind + 1}. {response.name}</h1>
								</span>
							</div>
						)
					})
				}
			</div>
			{isResponseFullViewOpen != -1 && <ResponseFullView setTrigger = {setResponseFullView}/>}
		</>
	)
}
