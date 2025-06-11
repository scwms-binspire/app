import { ThemeProvider } from "./components/provider/theme-provider";
import { ThemeColorSync } from "./components/theme-color-sync";
import { Link } from "react-router";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Link to="/request-access">Request Access</Link>
      <ThemeColorSync />
    </ThemeProvider>
  );
}
