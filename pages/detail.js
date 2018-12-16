import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import time from '../data/time.json'
import abc_News from '../data/Abc_News.json'


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
  //title from server.js
  //console.log(context.query)
  var datas;




    function check(datas) {
        const { title, source } = context.query
        if(source == 'Abc_News') datas = abc_News
        console.log(datas)
        var single = datas.filter(item => item.title == title)
        return {single}
    }
  await check(datas)
}

export default Post
