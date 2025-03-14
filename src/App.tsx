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
        <iframe className="widget-iframe" src="https://apps.peterson-solutions.com/public/chatbot/chat/8351cefe-5075-421b-9157-3e2efd6280be">
         </iframe>
    </div>
  </main>
);

export default App;
