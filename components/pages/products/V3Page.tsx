import Banner from "./sections/Banner";
import Hero from "./sections/Hero";
import ProductDetail from "./sections/ProductDetail";
import Register from "./sections/Register";
import Services from "./sections/Services";
import ShowCase from "./sections/ShowCase";

export default function V3Page() {
  return (
    <main className="container">
      <Hero />
      <Register />
      <Banner />
      <ShowCase />
      <Services />
      <ProductDetail />
    </main>
  );
}
