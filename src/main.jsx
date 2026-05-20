import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { AppProvider } from './contexts/AppContext.jsx';
import { BrowserRouter } from "react-router-dom";
import { store } from './store/store.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <AppProvider>
      <BrowserRouter>
        <App />
        <ToastContainer 
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored" 
          />
      </BrowserRouter>
    </AppProvider>
    </Provider>
  </StrictMode>
)
