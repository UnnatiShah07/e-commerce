import "./App.css";
import { Footer, Header } from "./frontend/components";
import AppRoutes from "./frontend/routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
      {/* <Footer /> */}
      <ToastContainer position="top-right" theme="dark" />
    </div>
  );
}

export default App;
