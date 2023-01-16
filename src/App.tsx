import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
