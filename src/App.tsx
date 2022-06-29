import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

function App() {

  return (
    <div>
      <BrowserRouter>
        <div className="bg-blur bg-cover bg-no-repeat flex min-h-screen">
            <div className="flex flex-1 justify-center flex-col">
                <div className="flex justify-center">
                  <div className="mb-10 bg-white border shadow-lg rounded-lg pb-5">   
                        <Router />
                  </div>
                </div>
            </div>
        </div>
      </BrowserRouter>      
    </div>
  )
}

export default App
