import Link from "next/link"
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="header_flex container">
        <div>
          <Link href="/">Parfum</Link>
        </div>
        <div className="header_linklar">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </div>
    </header>
  )
}

export default Header