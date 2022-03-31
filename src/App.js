import Navi from "./components/Navi";
import Login from "./pages/Login";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  return (

    <BrowserRouter>
    <Routes>
      
        <Route index element={<Navi />} />
        <Route path="login" element={<Login />}>
          
        </Route>
      
    </Routes>
  </BrowserRouter>
  //document.getElementById("app")

// {/* <BrowserRouter>
//     <Routes>
//         <Route index element={<Navi />} />
//           <Route path="login" element={<Login />}
          
// />
       
//     </Routes>
//   </BrowserRouter> */}

  );
}

export default App;
