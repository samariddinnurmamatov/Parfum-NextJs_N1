"use client"

import { useRouter } from 'next/navigation';
import { Fragment, useEffect,  } from "react";
import { useSelector } from 'react-redux';

export default function PrivateLayout({ children }) {
  const router = useRouter();
  const { user, isAuth} = useSelector(state => state.auth);
  useEffect(() => {
    if (!(user.role === 0)) {
      router.push('/');
    }
  })
  console.log(user, isAuth);
  return (
    <Fragment>
      <header>Admin header</header>
      <main>{children}</main>
      <footer>Admin footer</footer>
    </Fragment>
  );
}
