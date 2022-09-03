import ContextCounters from "./components/ContextCounters";
import MobXCounters from "./components/MobxCounters";
import ReduxCounters from "./components/ReduxCounters";

const App = () => (
  <div className="app">
    <ContextCounters/>
    <MobXCounters/>
    <ReduxCounters/>
  </div>
)

export default App;
