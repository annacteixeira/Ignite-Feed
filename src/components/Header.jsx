import styles from './Header.module.css'

export function Header(){
    return(
        // para diferenciar as clases CSS das classes JS, as classes css devem ser chamadas usando className
        <header className={styles.header}>
            <strong>Ignite Feed</strong>
        </header>
        
    );
}