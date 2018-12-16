import Link from 'next/link'

const linkStyle = {
  marginRight: 1
}

const Header = () => (
  <div className="containerr">
  <nav className="navbar navbar-light bg-light">
    <Link className="navbar-brand" as={`/`} href={`/`}>
      <a>
        <img src={`https://image.flaticon.com/icons/svg/21/21601.svg`} width="60" height="60" alt="" />
      </a>
    </Link>
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-black-list nav-link disabled hover-main-links" as={`/Abc_News`}  href={`/Abc_News`}><a>ABC News</a></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-black-list nav-link disabled hover-main-links" to="/BBC_News">BBC News</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-black-list nav-link disabled hover-main-links" to="/CBC_News">CBC News</Link>
      </li>
    </ul>
    </nav>
    <div>
      <ul className="nav justify-content-center bg-nav">
          <Link className="nav-link disabled nav-white-list home-button" to="/">
            <li className="nav-item">Home</li>
          </Link>
          <Link className="nav-link disabled nav-white-list" to="/Money_News">
            <li className="nav-item">Money</li>
          </Link>
          <Link className="nav-link disabled nav-white-list" to="/Sport">
            <li className="nav-item">Sport</li>
          </Link>
          <Link className="nav-link disabled nav-white-list" to="/NBC_News">
            <li className="nav-item">NBC News</li>
          </Link>
          <Link className="nav-link disabled nav-white-list" to="/Neewsweek">
            <li className="nav-item">Newsweek</li>
          </Link>
          <Link className="nav-link disabled nav-white-list" to="/Policy">
            <li className="nav-item">Policy</li>
          </Link>
          <Link className="nav-link disabled nav-white-list" to="/UsaToday">
            <li className="nav-item">USA Today</li>
          </Link>
      </ul>
    </div>

  </div>

)

export default Header
