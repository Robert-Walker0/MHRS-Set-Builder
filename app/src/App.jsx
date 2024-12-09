import Navbar from "./components/Navbar/Navbar.jsx"

function App() {
  return (
    <>
    <Navbar/>
    /* This element (main-title) didn't deserve it's own component since it was only one element by itself */
    <h1 className="main-title">Skill Selection</h1>
    </>
  );
}

export default App
