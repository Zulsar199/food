"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const getMessage = async () => {
    const res = await axios.get("http://localhost:8000");

    setMessage(res.data);
  };

  useEffect(() => {
    getMessage();
  }, []);
  return (
    <div>
      <p>helloo</p>
      <p>{message}</p>
    </div>
  );
}
