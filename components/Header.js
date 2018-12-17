import Link from 'next/link'

const linkStyle = {
  marginRight: 1
}

const Header = () => (
  <div className="container">
  <nav>
    <Link as={`/`} href={`/`}>
      <a>
        <img src={`https://image.flaticon.com/icons/svg/21/21601.svg`} width="60" height="60" alt="" />
      </a>
    </Link>
    <ul>
        <li>
          <Link as={`/Abc_News`}><a>ABC News</a></Link>
        </li>
      <li>
        <Link as={`/Bbc_News`}><a>BBC News</a></Link>
      </li>
      <li>
        <Link as={`/Cbc_News`}><a>CBC News</a></Link>
      </li>
    </ul>
    </nav>
    <div className="navBar">
      <ul>
        <li>
          <Link as={`/`}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link as="/Money_News">
            <a>Money</a>
          </Link>
        </li>
        <li>
          <Link as="/Sport">
            <a>Sport</a>
          </Link>
        </li>
        <li>
          <Link as="/NBC_News">
            <a>NBC News</a>
          </Link>
        </li>
        <li>
          <Link as="/Newsweek">
            <a >Newsweek</a>
          </Link>
        </li>
        <li>
          <Link as="/Policy">
            <a>Policy</a>
          </Link>
        </li>
        <li>
          <Link as="/UsaToday">
            <a >USA Today</a>
          </Link>
        </li>
      </ul>
    </div>
    <style jsx>{`

      .container {
        font-family: 'Fira Sans',Arial,sans-serif;
      }
      nav {
        background-color: #f8f9fa;
      }

      nav, nav ul {
        display: flex;
      }

      nav ul {
        width: 100%;
        justify-content: flex-end;
      }

      nav ul li {
        list-style-type: none;
        padding-right: 10px;
      }

      nav ul li a {
        text-decoration: none;
        color: black;
      }

      .navBar {
        background: #000000;
      }

      .navBar ul {
        width: 100%;
        display: flex;
      }

      .navBar ul li {
        list-style-type: none;
        padding: 15px;
        letter:spacing: 0.5px;
      }

      .navBar ul li a {
        text-decoration: none;
        color: #fff;
      }
    `}</style>
  </div>

)

export default Header
