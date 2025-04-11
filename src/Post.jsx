// props: { author: "", content: "" }

function Post(props) {
    console.log(props)

    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p> 
        </div>
    )
} // para exibir o valor de uma variável do JavaScript no HTML em React, é necessário usar {}

export default Post

// Default Exports vs Named Exports
/* 
    Default Exports: é possível nomear o componente na importação
    Ex.: import Post from './Post', ou import PostComponent from './Post'
    Para exportar: export default Post

    Named Exports: escrevemos a exportação junto à função. Ex.:
        export function Post(){
            return <p>Post</p>
        }

    Para importar depois: import { Post } from './Post'
*/