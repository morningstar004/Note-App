import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Paste from './components/Paste';
import VeiwPaste from './components/VeiwPaste';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <NavBar />
        <Home />
      </div>

    },
    {
      path: "/pastes",
      element:
      <div>
        <NavBar />
        <Paste />
      </div>

    },
    {
      path:"/pastes/:id",
      element:
      <div>
        <NavBar />
        <VeiwPaste />
      </div>

    }
  ]
);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
