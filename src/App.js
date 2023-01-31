import "./App.css";

// importamos los componentes
import DashboardBase from "./components/dashboard/DashboardBase";
// import LoginForm from "./components/logueo/login";
// import ModalRecibo from "./components/dashboard/ModalRecibo";

function App() {
  return (
    <div>
      <DashboardBase></DashboardBase>
      {/* <LoginForm></LoginForm> */}
      {/* <ModalRecibo></ModalRecibo> */}
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
