import { ResponseShimmerBox } from "./ResponseShimmerBox"
export const ResonceShimmerText = () => {
  return (
    <div className="h-fit max-w-[50vw] w-[50vw] flex flex-col gap-5">
      <div className="h-30 w-full px-4 py-6 flex flex-col gap-4 bg-zinc-900 rounded-3xl">
        {
          Array(3).fill('').map((_d, ind) => {
            return (
              <div className={`h-3 relative overflow-hidden animate-pulse rounded bg-zinc-500 ${ind == 2 ? 'w-1/2' : 'w-full'}`}>
              </div>
            )
          })
        }

      </div>
      <ResponseShimmerBox />
    </div>
  )
}

