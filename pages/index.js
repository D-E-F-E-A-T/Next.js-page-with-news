import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import data from '../data/time.json'
import io from 'socket.io-client';

import { Component } from 'react'

class Index extends Component {
  static getInitialProps() {
      console.log('test props')
      this.socket = io('http://localhost:3000/')

      this.socket.on('message', ({message}) => console.log(message.zwierze));
      return {}
    }
  render() {
    console.log('=', this.state)
    return (
      <Layout>
        <h1>News Api</h1>
        <ul>
          {data.map((item) => (
            <li>
              <Link as={`/news/${item.title}`} href={`/detail?title=${item.title}`}>
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
