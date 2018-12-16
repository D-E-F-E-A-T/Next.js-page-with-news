import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import time from '../data/time.json'
import abc_News from '../data/Abc_News.json'


export default class Post extends React.Component {
  static async getInitialProps (context) {
      const { title, source } = context.query
      var datas;
      console.log(source)
             if(source == 'Abc_News') datas = abc_News

         const single = abc_News.filter(item => item.title == title)
            return {}
  }


  constructor (props) {
      super(props)
      console.log(props.url.query,'props')
       const { title, source } = props.url.query
       var datas;
       if(source == 'Abc_News') datas = abc_News
      this.state = {
          single: datas
      }
      console.log('from constructor', this.state.single)
    }

componentDidMount() {
    console.log(this.props.url.query,'props')
     const { title, source } = this.props.url.query
     var datas;
     if(source == 'Abc_News') datas = abc_News
    this.setState({
        single: datas
    })
}
 render () {

     console.log(this.state)
          return (
              <Layout>
                <div>
                  <h1>{this.state.single[0].title}</h1>
                  <p>{this.state.single[0].description}</p>
                  <section key={this.state.single[0].source.id}>
                    <h5 className="card-title">{this.state.single[0].title}</h5>
                    <p className="card-text">{this.state.single[0].description}</p>

                    <div className="card-body">
                      <p className="card-content">{this.state.single[0].content}</p>
                      <a href={`${this.state.single[0].url}`} target="_blank" >link to the article</a>
                      <p className="card-author">Author: {this.state.single[0].author}</p>
                    </div>
                  </section>
                </div>
              </Layout>
          )



 }}
