import Card from "./components/Card"
import data from '../data.json'
import Summary from "./components/Summary"

function App() {
  return (
    <>
    <div className="flex flex-col justify-center w-full md:flex-row  md:w-[50%] md:mx-auto md:my-10">
      <Card />
      <section className="summary-section bg-white p-4 md:rounded-r-4xl flex justify-center items-center w-full flex-col -mt-10 relative z-0 md:mt-0 md:z-auto md:-ml-5 md:px-8">
        <h1 className="text-black text-xl text-left w-[90%] mt-7 mx-auto md:mt-3">Summary</h1>
        {data.map((result, index) => (
          <Summary key={index} result={result} />
        ))}
        <button className="w-[90%] bg-slate-700 text-white font-bold text-lg py-3 rounded-4xl my-4 mx-auto hover:bg-indigo-700 cursor-pointer">Continue</button>
      </section>
      </div>
    </>
  )
}

export default App
