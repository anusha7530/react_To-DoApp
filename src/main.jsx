
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store , persistor} from './redux/store.js'
import { PersistGate } from "redux-persist/integration/react";


ReactDOM.createRoot(document.getElementById('root')).render(
  // to prevent the tasks after refreshing the page 
  <PersistGate persistor={persistor}>
  {/* to provide the store to all components  */}
  <Provider store={store}>
      <App />
  </Provider>
</PersistGate>
)
