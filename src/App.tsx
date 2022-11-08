import Header from "./pages/Header/Header";
import { RouteList } from "./routes/RouteList";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <GlobalStyles>
      <Header />
      <RouteList />
    </GlobalStyles>
  );
}

export default App;
