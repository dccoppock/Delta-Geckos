import TitleNav from "./components/TitleNav/TitleNav";
import MonsterCard from "./components/MonsterCard/MonsterCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleNav position='absolute'></TitleNav>
        <MonsterCard></MonsterCard>
      </header>
    </div>
  );
}

export default App;
