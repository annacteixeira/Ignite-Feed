import { Avatar } from './Avatar'
import { Trash, ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://plus.unsplash.com/premium_photo-1663040480219-075412b6a58e?q=100&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jane Doe</strong>
                            <time title="11 de abril de 2025 às 14:36h" datetime="2025-04-11 14:36:00">
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>
                        Muito bom Devon, parabéns!! 👏👏
                    </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>


        </div>
    )
}