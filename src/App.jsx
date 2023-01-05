import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./Post"


import styles from './App.module.css';

import './global.css'

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CEO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera!'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. Nome do projeto é DoctorCare.'},
      {type: 'link', content: 'jane.designe/doctorcare'},
    ],
    publishedAt: new Date('2022-11-22 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal!'},
      {type: 'paragraph', content: 'Acabei de subir uma nova aula no meu canal do Youtube. Aula muito legal sobre responsividade. Contém dicas muito boas para implementar nos seus projetos.'},
      {type: 'link', content: 'mayl.brito/responsividade'},
    ],
    publishedAt: new Date('2022-11-27 15:00:00')
  }
]

export function App() {

  return (
   <>
    <Header/>
    <div className={styles.wrapprer}>
      <Sidebar/>
      <main>
        {post.map(post => {
          return (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              key={post.id}
            />
          )
        })}
      </main>
    </div>
   </>
  )
}
