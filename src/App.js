import logo from './logo.svg';
import './App.css';
import JsxTest from "./components/JsxTest/JsxTest";
import Header from './components/Webstructure/Header';
import Main from './components/Webstructure/Main';
import Aside from './components/Webstructure/Aside';
import Footer from './components/Webstructure/Footer';
import Login from './components/Login/Login';


function App() {
  return (
   <div className='App'>
      {/* Importing from JsxTest */}
      {/* <JsxTest />
      <Header />
      <div className="wrapper">
          <Main />
          <Aside />
      </div>
      <Footer /> */}
      <Login />
    </div>
  );
}

export default App;
