function Summary({ result }) {
  return (
    <div className={`summary-item w-[90%] rounded-xl my-3 mx-auto ${result.category.toLowerCase()}`}>
      <div className='flex justify-between items-center m-auto p-5 gap-4'>
        <div className="flex items-center gap-2">
          <img src={result.icon} alt={result.category} className="profile-image" />
          <h2>{result.category}</h2>
        </div>
        <p className="text-black font-bold text-xl">{result.score}<span className="text-gray-400 font-normal text-base"> / 100</span></p>
      </div>
    </div>
  )
}

export default Summary