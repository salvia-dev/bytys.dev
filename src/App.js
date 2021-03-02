import './App.scss';
import { Header, Socials, Main, ScrollBack } from './grabbers/exports';

function App() {
  return (
    <div className="App" id="app">
        <Header />
        <Main />
        <Socials />
        <ScrollBack />
    </div>
  );
}

export default App;
