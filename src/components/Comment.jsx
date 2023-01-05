import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0);
    
    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time 
                                title='11 de Maio às 8:13h' 
                                fatetime="2022-05-11 08:13:30"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>                        
                    </header>

                    <p>{content}</p>

                    <footer>
                       <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                                Apaudir <span>{likeCount}</span>
                       </button>
                    </footer>

                </div>

            </div>
        </div>
    )
}