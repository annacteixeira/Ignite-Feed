import { Avatar } from './Avatar'
import { Trash, ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'
import { useState } from 'react'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://plus.unsplash.com/premium_photo-1663040480219-075412b6a58e?q=100&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jane Doe</strong>
                            <time title="11 de abril de 2025 às 14:36h" dateTime="2025-04-11 14:36:00">
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>
                       {content}
                    </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>


        </div>
    )
}