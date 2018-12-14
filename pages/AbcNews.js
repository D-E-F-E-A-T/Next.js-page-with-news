import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import data from '../data/abb-news.json'

const Abc = (props) => (
  <Layout>
    <h1>ABC template</h1>
    <ul>
      {props.data.map((item) => (
        <li>
          <Link as={`/abc/${item.title}`} href={`/detail?title=${item.title}`}>
            <a>{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Abc.getInitialProps = async function() {
//console.log(data)

const x = {name: 'tobiasz'} //test
  return {
    data
  }
}

export default Abc
