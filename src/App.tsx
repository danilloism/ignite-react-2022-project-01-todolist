import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Content />
      <footer>
        <section>
          <span>Desenvolvido por</span> <strong>Danillo Ilggner</strong>
        </section>
        <section>
          <strong>danilloilggner@gmail.com</strong>
        </section>
      </footer>
    </div>
  );
}

export default App;
