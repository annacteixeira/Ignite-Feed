// Componentes = Funções que retornam HTML
// Todos os componentes possuem extensão .jsx
// .jsx = JavaScript + XML
import { Header } from './components/Header'
import { Post, PostType} from './components/Post';
import { Sidebar } from './components/Sidebar'

import './global.css';
import styles from './components/App.module.css'

// author: { avatar_url: "" , name: "", role: ""}
// publishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/annacteixeira.png',
      name: 'Anna Chandra',
      role: 'Desenvolvedora Júnior',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
      // { type: 'link', content: '#novoprojeto'},
      // { type: 'link', content: '#nlw'},
      // { type: 'link', content: '#rocketseat'},
    ],
    publishedAt: new Date('2025-04-12 13:43:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/bielwdev.png',
      name: 'Gabriel Victor',
      role: 'Desenvolvedor Fullstack Junior',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
      // { type: 'link', content: '#novoprojeto'},
      // { type: 'link', content: '#nlw'},
      // { type: 'link', content: '#rocketseat'},
    ],
    publishedAt: new Date('2025-04-11 12:00:00')
  },
];


// Iteração em React

export function App() { // componente App -> função que retorna HMTL

  return (
    <>
      <div>
        {/* Trabalhando com propriedades em React */}

        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              )
            })}
          </main>
        </div>
      </div>

    </>
  )
}



