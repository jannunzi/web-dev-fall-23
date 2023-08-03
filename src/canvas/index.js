import { Provider } from "react-redux";
import Dashboard from "./dashboard";
import { store } from "./state/store";

function Canvas() {
  return (
    <Provider store={store}>
      <div>
        <a name="canvas"></a>
        <Dashboard />
      </div>
    </Provider>
  );
}

export default Canvas;
