import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import data from '../data/time.json'

const Post =  (props) => (
    <Layout>
      <div>
        <h1>{props.single[0].title}</h1>
        <p>{props.single[0].description}</p>
        <section key={props.single[0].source.id}>
          <h5 className="card-title">{props.single[0].title}</h5>
          <p className="card-text">{props.single[0].description}</p>

          <div className="card-body">
            <p className="card-content">{props.single[0].content}</p>
            <a href={`${props.single[0].url}`} target="_blank" >link to the article</a>
            <p className="card-author">Author: {props.single[0].author}</p>
          </div>
        </section>
      </div>
    </Layout>
)


Post.getInitialProps = async function(context) {
    console.log('context.query: ', context.query )

  const { title } = context.query //title from server.js
  //console.log('DATA ID ', title)
  console.log('props:', context.query)

  const single = data.filter(item => item.title == title);

  //socket.on('AbcNews', data => cb(null, data));



  return {single}
}

export default Post
