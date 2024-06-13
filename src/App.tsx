import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { Whatsapp } from "./components/Whatsapp";

export function App() {
  return (
    <>
      <Header />

      <main>
        <Banner />
      </main>

      <Whatsapp />
    </>
  );
}
