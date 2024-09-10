import "./App.css";
import CurrencyForm from "./CurrencyConverter/CurrencyForm";

function App() {
  return (
    <div className="flex justify-center items-center flex-col w-full min-h-screen bg-[url('/17455.jpg')] bg-cover bg-center">
      <div className="max-w-screen-md border border-slate-500 backdrop-blur-lg rounded-2xl m-4 p-6 shadow-lg shadow-black bg-slate-950/40">
        <h1 className="font-PTSerif text-2xl font-semibold text-center mb-6 text-white">Currency Converter</h1>
    <CurrencyForm/>
      </div>
    </div>
  );
}

export default App;
