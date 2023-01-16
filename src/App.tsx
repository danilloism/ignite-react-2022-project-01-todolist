import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.content}>Conteúdo</div>
    </div>
  );
}

export default App;
