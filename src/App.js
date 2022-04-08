import "./App.css";

import Timer from "./components/timer";

function App() {
  return (
    <div>
      <nav className="app-header-unique layout-row align-items-center justify-content-center">
        <div className="layout-row align-items-center">
          <img
            alt=""
            src="https://www.bavaria.co/sites/g/files/phfypu1316/themes/site/bavaria/design/img/bavaria-logo-red.png"
            className="logo"
          />
          <h4
            id="app-title"
            data-testid="app-title"
            className="app-title-unique"
          >
            Prueba técnica React
          </h4>
        </div>
      </nav>
      <Timer initial={120} />
    </div>
  );
}

export default App;
