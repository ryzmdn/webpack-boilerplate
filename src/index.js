import "./style.css";

const APP_ENV = process.env.NODE_ENV || "development";
const IS_DEVELOPMENT = APP_ENV === "development";
const IS_PRODUCTION = APP_ENV === "production";

const getAppElement = () => document.getElementById("app");

const renderApp = () => {
  const app = getAppElement();

  if (!app) {
    console.error("App element not found");
    return;
  }

  app.innerHTML = `
    <main >
      <h1>Hello, World!</h1>
      <div>
        <p>Environment: <strong>${APP_ENV}</strong></p>
        ${IS_DEVELOPMENT ? "<p>⚡ HMR is enabled</p>" : ""}
      </div>
      ${IS_PRODUCTION ? "<p>🚀 You are in production mode</p>" : ""}
    </main>
  `;
};

renderApp();

const configureHMR = () => {
  if (IS_DEVELOPMENT) {
    if (import.meta?.webpackHot) {
      import.meta.webpackHot.accept(renderApp);
    } else if (module?.hot) {
      module.hot.accept(renderApp);
    }
  }
};

configureHMR();

if (IS_DEVELOPMENT) {
  console.log(`Running in ${APP_ENV} mode`);
  window.APP_ENV = APP_ENV;
}
