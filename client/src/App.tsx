import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext"; // <-- ADICIONE ESTA LINHA
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <LanguageProvider>  {/* <-- ENVOLVA O ROUTER COM ISTO */}
          <Router />
        </LanguageProvider> {/* <-- ENVOLVA O ROUTER COM ISTO */}
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;