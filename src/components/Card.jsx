
function Card() {
  return (
    <>
    <div className="bg-gradient-to-t from-indigo-700 to-violet-500 p-8 rounded-b-4xl flex flex-col w-full justify-center items-center gap-4 md:rounded-4xl relative z-10">
    <h1 className="text-gray-300 text-xl">Your Result</h1>
    <div className="bg-gradient-to-t from-indigo-700 to-violet-800 rounded-full w-40 h-40 flex items-center justify-center">
      <h2 className="flex flex-col items-center text-white text-5xl font-bold">76 <br /><span className="text-xs">of 100</span></h2>
      </div>
      <h3 className="text-white text-lg">Great</h3>
      <p className="text-gray-300 text-center w-[45%] md:w-[80%]">You scored higher than 65% of the people who have taken these tests.</p>
    </div>
    </>
  )
}

export default Card