"use client";

import { request } from "@/server/request";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserAccount = () => {
  // const { user } = useSelector((state) => state.auth);
  const [user, setUser] = useState(null);
  async function getUserData() {
    const { data } = await request.get("auth/me");
    setUser(data);
  }
  useEffect(() => {
    getUserData();
  }, []);
  return <div>{JSON.stringify(user)}</div>;
};

export default UserAccount;
