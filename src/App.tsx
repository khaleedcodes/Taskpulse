import Navbar from "./components/Navbar";
import ToDoWrapper from "./components/ToDoWrapper";
import "../src/styles/index.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <ToDoWrapper />
      <Footer/>
    </div>
  );
}

export default App;
