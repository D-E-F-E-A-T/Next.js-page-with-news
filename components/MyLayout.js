import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    <div className="container-fluid">
      {props.children}
    </div>
    <style jsx>{`
      .container-fluid {
        background-color: #fdfdfd;
        font-family: 'Fira Sans',Arial,sans-serif;
      }
    `}</style>
  </div>

)

export default Layout
