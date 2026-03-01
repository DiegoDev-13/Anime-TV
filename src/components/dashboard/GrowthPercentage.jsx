export const GrowthPercentage = ({data}) => {
  return (
    <div className={`${data > 0 ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"} py-0.2 px-1 rounded-lg font-bold`}>
        {
            data > 0 ? `+${data}%` : `${data}%`
        }
    </div>
  )
}