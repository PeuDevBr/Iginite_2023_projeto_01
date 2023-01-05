import { format, formatDistanceToNow } from 'date-fns/esm';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from './components/Avatar';
import { Comment } from './components/Comment';
import styles from './Post.module.css';


export function Post({author, content, publishedAt}) {
    const [comments, setComments] = useState([
        'Post muito bacana, hein?'
    ])  

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR, 
        addSuffix: true
    });

    function handleCreateNewComment() {
        event.preventDefault();

        const newCommentText = event.target.comment.value;
        setComments([...comments, newCommentText]);

        setNewCommentText('');
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete) {
        const commnentWithoutDeleteOne = comments.filter( comment => {
            return comment !== commentToDelete;
        })

        setComments(commnentWithoutDeleteOne);
    }

    const isNewCommentEmpety = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} fatetime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map (line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else  if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name='comment' 
                    placeholder='Deixe seu comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={ isNewCommentEmpety }>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
               {comments.map(comment => {
                    return  (
                        <Comment 
                            key={comment} 
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
               })}
            </div>
        </article>
    )
}