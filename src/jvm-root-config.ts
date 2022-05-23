import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@jvm/react-single",
  app: () =>
    System.import("@jvm/react-single"),
  activeWhen: (location) => location.pathname === '/react-single',
});


registerApplication({
  name: "@jvm/react-multiples",
  app: () =>
    System.import("@jvm/react-multiples"),
  activeWhen: ['/react-multiples'],
});


registerApplication({
  name: "@jvm/react-route",
  app: () =>
    System.import("@jvm/react-route"),
  activeWhen: (location) => location.pathname === '/react-route',
});

registerApplication

// registerApplication({
//   name: "@jvm/navbar",
//   app: () => System.import("@jvm/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
