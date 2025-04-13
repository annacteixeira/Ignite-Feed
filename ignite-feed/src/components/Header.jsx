import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg';


export function Header(){
    return(
        // para diferenciar as clases CSS das classes JS, as classes css devem ser chamadas usando className
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>
        
    );
}