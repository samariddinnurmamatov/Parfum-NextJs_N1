"use client";

import Link from "next/link"
import './header.css'

import { useDispatch, useSelector } from "react-redux";

import { logout } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { Fragment } from "react";


const Header = () => {
  const { isAuth, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
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
          <Link href="/login">Login</Link>
          {isAuth ? (
            <Fragment>
              <Link href="/account">Account | {user?.firstName} </Link>
              <button onClick={() => dispatch(logout(router))}>Logout</button>
            </Fragment>
          ) : null}
        </div>
      </div>
    </header>
  )
}

export default Header