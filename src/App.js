import "./App.css";
// import Charts from "./components/Charts";
import DashboardBase from "./components/DashboardBase";

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
      {/* <CardBase></CardBase> */}
      {/* <TabListBase></TabListBase> */}
      {/* <Charts></Charts> */}
      <DashboardBase></DashboardBase>
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
