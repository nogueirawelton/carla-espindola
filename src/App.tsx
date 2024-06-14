import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { Whatsapp } from "./components/Whatsapp";
import { Services } from "./components/Services";
import { SmootherProvider } from "./hooks/useSmoother";

export function App() {
  return (
    <SmootherProvider>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="h-[300vh]">
            <Banner />
            <Services />
          </main>
        </div>
      </div>

      <Whatsapp />
    </SmootherProvider>
  );
}
