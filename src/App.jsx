import { useState, useEffect } from "react";
import Quote from "./assets/components/Quote";
import Spinner from "./assets/components/Spinner";


function App() {


  const [quote, setQuote] = useState({});
  const [spinner, setSpinner] = useState(false);

  const updateQuote = async () => {
    setSpinner(true)
    const url = "https://api.breakingbadquotes.xyz/v1/quotes/5";
    const res = await fetch(url);
    const [data] = await res.json();

    setQuote({
      text: data.quote,
      author: data.author

    })

    setSpinner(false)
  }

  useEffect(() => {
    updateQuote()
  }, [])




  




  return (
    <div className="App">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />

      <button
        onClick={() => {
          updateQuote()

        }}>Generate phrase</button>

      {spinner ? <Spinner /> : <Quote quote={quote} />
      }




    </div>
  )
}

export default App
