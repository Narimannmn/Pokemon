import style from './App.module.css'
import Navbar from "./views/Navbar/Navbar";
import Content from "./views/Content/Content";
import Footer from "./views/Footer/Footer";
function App() {
  return (
    <>
      <div className={style.container}>
        <Navbar/>
        <Content/>

      </div>
      <Footer/>
    </>
  );
}

export default App;
