import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {SpeechProvider} from '@speechly/react-client'
import { Provider } from './context/context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SpeechProvider appId='217304fb-aa38-411b-bbe3-a21531270078' language='en-US'>
        <Provider>
          <App />
        </Provider>,
  </SpeechProvider>

)
