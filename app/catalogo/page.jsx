"use client";
import React, { useState } from "react";
import styles from "./Catalogo.module.css";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

export default function Catalogo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const isFormValid =
    name.trim() !== "" && email.trim() !== "" && message.trim() !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setEmailError("");

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      return;
    }
  
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await res.json();
  };

  return (
    <div className={styles.main}>
      <Menu/>
          <h1 
          className="header-page"
          >
            Catalogo
          </h1>
          <div className="container my-20 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 my-20 lg:-mx-4">

                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                    <article className="overflow-hidden rounded-lg shadow-2xl ">

                        <a href="#">
                            <img alt="Placeholder" className="block h-auto w-full" src="https://playnettie.com/cdn/shop/files/2_42764de8-1043-4fa4-8adc-90c56f1bea77_360x.png?v=1692214466" />
                        </a>

                        <header className="flex items-center justify-between leading-tight">
                            <h1 className="mt-2 ml-2 text-2xl">
                                <a className="no-underline hover:underline text-white" href="#">
                                    Volair Match 1
                                </a>
                            </h1>
                        </header>

                        <footer className="flex items-center justify-between leading-none">
                            <a className="flex items-center no-underline hover:underline text-zinc-400" href="#">
                                <h1 className="mt-2 ml-2 text-xl">
                                    $160.00
                                </h1>
                            </a>
                        </footer>

                    </article>

                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                    <article className="overflow-hidden rounded-lg shadow-2xl">

                        <a href="#">
                            <img alt="Placeholder" className="block h-auto w-full" src="https://playnettie.com/cdn/shop/files/2_42764de8-1043-4fa4-8adc-90c56f1bea77_360x.png?v=1692214466" />
                        </a>

                        <header className="flex items-center justify-between leading-tight">
                            <h1 className="mt-2 ml-2 text-2xl">
                                <a className="no-underline hover:underline text-white" href="#">
                                    Volair Match 1
                                </a>
                            </h1>
                        </header>

                        <footer className="flex items-center justify-between leading-none">
                            <a className="flex items-center no-underline hover:underline text-zinc-400" href="#">
                                <h1 className="mt-2 ml-2 text-xl">
                                    $160.00
                                </h1>
                            </a>
                        </footer>

                    </article>

                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                    <article className="overflow-hidden rounded-lg shadow-2xl ">

                        <a href="#">
                            <img alt="Placeholder" className="block h-auto w-full" src="https://playnettie.com/cdn/shop/files/2_42764de8-1043-4fa4-8adc-90c56f1bea77_360x.png?v=1692214466" />
                        </a>

                        <header className="flex items-center justify-between leading-tight">
                            <h1 className="mt-2 ml-2 text-2xl">
                                <a className="no-underline hover:underline text-white" href="#">
                                    Volair Match 1
                                </a>
                            </h1>
                        </header>

                        <footer className="flex items-center justify-between leading-none">
                            <a className="flex items-center no-underline hover:underline text-zinc-400" href="#">
                                <h1 className="mt-2 ml-2 text-xl">
                                    $160.00
                                </h1>
                            </a>
                        </footer>

                    </article>

                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                    <article className="overflow-hidden rounded-lg shadow-2xl ">

                        <a href="#">
                            <img alt="Placeholder" className="block h-auto w-full" src="https://playnettie.com/cdn/shop/files/2_42764de8-1043-4fa4-8adc-90c56f1bea77_360x.png?v=1692214466" />
                        </a>

                        <header className="flex items-center justify-between leading-tight">
                            <h1 className="mt-2 ml-2 text-2xl">
                                <a className="no-underline hover:underline text-white" href="#">
                                    Volair Match 1
                                </a>
                            </h1>
                        </header>

                        <footer className="flex items-center justify-between leading-none">
                            <a className="flex items-center no-underline hover:underline text-zinc-400" href="#">
                                <h1 className="mt-2 ml-2 text-xl">
                                    $160.00
                                </h1>
                            </a>
                        </footer>

                    </article>

                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                    <article className="overflow-hidden rounded-lg shadow-2xl ">

                        <a href="#">
                            <img alt="Placeholder" className="block h-auto w-full" src="https://playnettie.com/cdn/shop/files/2_42764de8-1043-4fa4-8adc-90c56f1bea77_360x.png?v=1692214466" />
                        </a>

                        <header className="flex items-center justify-between leading-tight">
                            <h1 className="mt-2 ml-2 text-2xl">
                                <a className="no-underline hover:underline text-white" href="#">
                                    Volair Match 1
                                </a>
                            </h1>
                        </header>

                        <footer className="flex items-center justify-between leading-none">
                            <a className="flex items-center no-underline hover:underline text-zinc-400" href="#">
                                <h1 className="mt-2 ml-2 text-xl">
                                    $160.00
                                </h1>
                            </a>
                        </footer>

                    </article>

                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                    <article className="overflow-hidden rounded-lg shadow-2xl ">

                        <a href="#">
                            <img alt="Placeholder" className="block h-auto w-full" src="https://playnettie.com/cdn/shop/files/2_42764de8-1043-4fa4-8adc-90c56f1bea77_360x.png?v=1692214466" />
                        </a>

                        <header className="flex items-center justify-between leading-tight">
                            <h1 className="mt-2 ml-2 text-2xl">
                                <a className="no-underline hover:underline text-white" href="#">
                                    Volair Match 1
                                </a>
                            </h1>
                        </header>

                        <footer className="flex items-center justify-between leading-none">
                            <a className="flex items-center no-underline hover:underline text-zinc-400" href="#">
                                <h1 className="mt-2 ml-2 text-xl">
                                    $160.00
                                </h1>
                            </a>
                        </footer>

                    </article>

                </div>

            </div>
          </div>

      <Footer/>
    </div>
  );
}
