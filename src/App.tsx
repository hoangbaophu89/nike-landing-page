import {
  CustomerReviews,
  Hero,
  PopularProducts,
  SuperQuality,
  SpecialOffer,
  Services,
  Subscribe,
  Footer,
} from "./sections";

import Nav from "./components/Nav";

const sections: {
  component: JSX.Element;
  className: string;
}[] = [
    { component: <Hero />, className: "xl:padding-l wide:padding-r padding-b" },
    { component: <PopularProducts />, className: "padding" },
    { component: <SuperQuality />, className: "padding" },
    { component: <Services />, className: "padding-x py-10" },
    { component: <SpecialOffer />, className: "padding" },
    { component: <CustomerReviews />, className: "bg-pale-blue padding" },
    { component: <Subscribe />, className: "padding-x sm:py-32 py-16 w-full" },
    { component: <Footer />, className: "bg-black padding-x padding-t pb-8" },
  ];

const App = () => (
  
  <main className="relative">
    <Nav />
    {sections.map(({ component, className }, index) => (
      <section key={index} className={className}>
        {component}
      </section>
    ))}
    <div id="oc-widget" className="oc-widget">
    <iframe
     className="widget-iframe"
      src="https://red-mushroom-0be233b00.5.azurestaticapps.net/public/chatbot/chat/612ed49b-7c55-427a-bc49-2632e33e08fe" />
  </div>
  </main>
);

export default App;
