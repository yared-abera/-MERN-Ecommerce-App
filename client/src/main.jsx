import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store';
import { Toaster } from './components/ui/toaster';
 

 createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <Provider store={store}> 
    <App />
    <Toaster />
   </Provider>
   </BrowserRouter>
);
