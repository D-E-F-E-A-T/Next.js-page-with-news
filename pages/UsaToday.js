import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import data from '../data/usa-today.json'

const UsaToday = (props) => (
  <Layout>
    <h1>UsaToday</h1>
    <ul>
      {props.data.map((item) => (
        <li>
          <Link as={`/UsaToday/${item.title.replace(/ /g, "_")}`} href={`/detail?title=${item.title}`}>
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

UsaToday.getInitialProps = async function() {
  return {
    data
  }
}

export default UsaToday
