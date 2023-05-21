import "./App.css";
import { Header } from "./frontend/components";
import AppRoutes from "./frontend/routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
