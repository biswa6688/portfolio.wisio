import { ThemeProvider } from "./context/ThemeContext";
import { Nav } from "./components/Nav";
import { ScrollSignal } from "./components/ui/ScrollSignal";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Journey } from "./components/sections/Journey";
import { Projects } from "./components/sections/Projects";
import { Products } from "./components/sections/Products";
import { Contact, Footer } from "./components/sections/Contact";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg)]">
        <ScrollSignal />
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Journey />
          <Projects />
          <Products />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
