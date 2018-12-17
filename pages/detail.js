import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import time from '../data/time.json'
import abc_News from '../data/Abc_News.json'
import bbc_News from '../data/bbc-news.json'
import cbc_News from '../data/cbc-news.json'
import money from '../data/fortune.json'
import sport from '../data/fox-sports.json'
import neewsweek from '../data/newsweek.json'
import nbc from '../data/nbc-news.json'
import usaToday from '../data/usa-today.json'
import politico from '../data/politico.json'

export default class Post extends React.Component {

  constructor (props) {
    super(props)
    const { title, source } = props.url.query
    var datas;
    if(source == 'Abc_News') datas = abc_News
    if(source == 'time') datas = time
    if(source == 'Bbc_News') datas = bbc_News
    if(source == 'Cbc_News') datas = cbc_News
    if(source == 'Money_News') datas = money
    if(source == 'Sport') datas = sport
    if(source == 'Newsweek') datas = neewsweek
    if(source == 'NBC_News') datas = nbc
    if(source == 'UsaToday') datas = usaToday
    if(source == 'Policy') datas = politico
    const single = datas.filter(item => item.title.replace(/ /g, "_") == title)
    this.state = {
       single: single
    }
  }
/*
  componentDidMount() {
    const { title, source } = this.props.url.query
    var datas;

    if(source == 'time') datas = time
    if(source == 'Abc_News') datas = abc_News
    if(source == 'Bbc_News') datas = bbc_News
    const single = datas.filter(item => item.title == title)
    this.setState({
      single: single
    })
  }*/
  render () {
    return (
      <Layout>
        <div>
          <h1>{this.state.single[0].title}</h1>
          <p>{this.state.single[0].description}</p>
          <section key={this.state.single[0].source.id}>
            <h5 className="card-title">{this.state.single[0].title}</h5>
            <p className="card-text">{this.state.single[0].description}</p>
            <img className="img-style" src={this.state.single[0].urlToImage} width="300px" height="300px"/>
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
//https://stackoverflow.com/questions/30803440/delayed-rendering-of-react-components
