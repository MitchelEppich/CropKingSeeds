import ReactGA from "react-ga";
const dev = process.env.NODE_ENV !== "production";
export const initGA = () => {
  if (dev) {
    return;
  }
  ReactGA.initialize("UA-127304635-2", {
    debug: dev
  });
};
export const logPageView = () => {
  if (dev) {
    return;
  }
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
