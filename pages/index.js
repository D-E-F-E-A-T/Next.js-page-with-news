import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import data from '../data/time.json'

import { Component } from 'react'

class Index extends Component {
  static getInitialProps() {
      return {}
  }

  render() {
    return (
      <Layout>
        <h1>News Api</h1>
        <ul>
          {data.map((item, index) => (
            <li>
              <Link key={index} as={`/news/${item.title}`} href={`/detail?title=${item.title}`}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }

}


export default Index
