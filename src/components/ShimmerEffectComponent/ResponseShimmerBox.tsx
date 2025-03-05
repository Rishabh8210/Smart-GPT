
export const ResponseShimmerBox = () => {
  return (
    <div className="h-fit w-full px-4 py-6 flex justify-evenly gap-5 flex-wrap bg-zinc-900 rounded-3xl">
      {
        Array(4).fill('').map((_d, ind) => {
          return (
            <div key={ind} className="h-60 w-[48%] relative overflow-hidden animate-pulse rounded-2xl bg-zinc-500">

            </div>
          )
        })
      }

    </div>
  )
}
