import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//router
import { Router } from './Router';

import {RecoilRoot} from 'recoil'

function App() {

  return (
    <div className="App">
      <RecoilRoot>
        <Router />
      </RecoilRoot>
      
    </div>
  )
}

export default App
