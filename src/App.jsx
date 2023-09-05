import { Container } from "react-bootstrap";
import DrinkForm from "./components/DrinkForm";
import { CategoryProvider } from "./contects/CategoryProvider";
import { DrinkProvider } from "./contects/DrinkProvider";
import DrinksList from "./components/DrinksList";
import DrinkModal from "./components/DrinkModal";

function App() {
  return (
    <CategoryProvider>
      <DrinkProvider>
        <header className="py-5">
          <h1>Drink Finder</h1>
        </header>
        <Container className="mt-5">
          <DrinkForm />
          <DrinksList/>
          <DrinkModal/>
        </Container>
      </DrinkProvider>
    </CategoryProvider>
  );
}

export default App;
