import styles from './Sidebar.module.css';
import { PencilSimpleLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
            />

            <div className={styles.profile}>

                <Avatar hasBorder src="https://github.com/diego3g.png"/>
                <strong>Adote-me</strong>
                <span>Compartilhe seu amor</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={16} className={styles.icon}/>
                    Editar Perfil
                </a>
            </footer>
        </aside>
    )
}