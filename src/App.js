import "./App.css";
import { Header } from "./frontend/components";
import AppRoutes from "./frontend/routes/AppRoutes";

function App() {
  return (
    <div>
      <Header/>
      <AppRoutes />
    </div>
  );
}

export default App;
