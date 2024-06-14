import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { Whatsapp } from "./components/Whatsapp";
import { Services } from "./components/Services";
import { SmootherProvider } from "./hooks/useSmoother";
import { Benefits } from "./components/Benefits";
import { About } from "./components/About";
import { Location } from "./components/Location";

export function App() {
  return (
    <SmootherProvider>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Banner />
            <Services />
            <Benefits />
            <About />
            <Location />
          </main>
        </div>
      </div>

      <Whatsapp />
    </SmootherProvider>
  );
}
