import styles from './Header.module.css';
import rocketLogo from '../../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src={rocketLogo}
        alt="Imagem minimalista de um foguete com um círculo indicando uma janela, duas asas pontiagudas na base e abaixo do foguete estão três listras arredondadas denotando o fogo da propulsão."
      />
      <h1>
        <span>to</span>
        <span>do</span>
      </h1>
    </header>
  );
}
