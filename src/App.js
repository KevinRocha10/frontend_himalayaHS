import "./App.css";
import DashboardBase from "./components/DashboardBase";
// import LoginForm from "./components/login";

// importamos los componentes
// import CompShowBlogs from "./components/ShowBlogs";
// import CompCreateBlog from "./components/CreateBlog";
// import CompEditBlog from "./components/EditBlog";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import CardBase from "./components/CardBase";
// import TabListBase from "./components/TabListBase";

function App() {
  return (
    <div>
      <DashboardBase></DashboardBase>
      {/* <LoginForm></LoginForm> */}
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<CompShowBlogs />} />
    //       <Route path="/create" element={<CompCreateBlog />} />
    //       <Route path="/edit/:id" element={<CompEditBlog />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
