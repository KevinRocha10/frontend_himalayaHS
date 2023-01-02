import "./App.css";

// importamos los componentes
import DashboardBase from "./components/DashboardBase";
// import LoginForm from "./components/login";

function App() {
  return (
    <div>
      <DashboardBase></DashboardBase>
      {/* <LoginForm></LoginForm> */}
    </div>

    //

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
