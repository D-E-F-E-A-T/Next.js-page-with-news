import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import data from '../data/time.json'

import { Component } from 'react'

class Index extends Component {
  static getInitialProps(props) {
      return {}
  }

  render() {
    return (
      <Layout>
        <h1>From World</h1>
        <ul className="test">
          {data.map((item, index) => (
            <li>
              <Link key={index} as={`/time/${item.title.replace(/ /g, "_")}`} href={`/detail?title=${item.title}`}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <style jsx>{`
           h1 {
            text-align: center;
            margin-top: 50px;
            letter-spacing: 2px;
            font-weight: 800;
          }
          ul li a {
            line-height: 2;
            text-decoration: none;
            font-size: 21px;
            font-weight: 500;
            color: black;
            padding-left: 15px;
          }
          ul li:hover {
            background: #f7f7f7;
            padding: 1px;
          }
        `}</style>
      </Layout>
    )
  }

}


export default Index
