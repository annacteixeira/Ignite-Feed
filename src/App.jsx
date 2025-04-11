// Componentes = Funções que retornam HTML
// Todos os componentes possuem extensão .jsx
// .jsx = JavaScript + XML

import { Header } from './components/Header'
import Post from './Post';

import './global.css';
import styles from './components/App.module.css'
import { Sidebar } from './components/Sidebar';

export function App() { // componente App -> função que retorna HMTL

  return (
    <>
      <div>
        {/* Trabalhando com propriedades em React */}

        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post
              author="Anna Chandra"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore cum iure doloribus et eveniet. Dolorum, impedit facilis?"
            />

            <Post
              author="Gabriel Victor"
              content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio suscipit, quaerat, nesciunt unde laboriosam cumque delectus ex expedita velit dolor maxime a ipsa! Sunt soluta id placeat, laudantium porro sint."
            />
          </main>
        </div>
      </div>

    </>
  )
}



