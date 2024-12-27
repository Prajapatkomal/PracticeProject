import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import {TokenContextProvider} from './context/tokenContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(


//  <TokenContextProvider>
  <BrowserRouter>
     <App />
 </BrowserRouter>
// </TokenContextProvider>
 
 

)
