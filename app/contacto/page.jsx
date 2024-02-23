"use client";
import React, { useState } from "react";
import styles from "./contacto.module.css";
import Footer from "@/components/Footer2";
import Menu from "@/components/Menu";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Contacto() {
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
  
    try {
      const data = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (data.status === 200) {
        toast.success('Email enviado!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        setEmail("")
        setName("")
        setMessage("")
      } else {
        toast.error('Error: vuelve a intentar!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
      
    } catch (error) {
      
    }

    

  };

  return (
    <>
    <div className={styles.main}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
      <Menu/>
      <h1 className={styles.h1}>
      RELLENE EL FORMULARIO O ENVÍE UN<br/> CORREO ELECTRÓNICO A
      </h1>
      
      <h2 className={styles.h2}>info@deporteslacocina.com</h2>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Nombre"
                    autoComplete="given-name"
                    className={`${styles.input} py-1.5`}
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Email"
                    autoComplete="email"
                    className={`${styles.input} py-1.5`}
                    required
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Mensaje"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    id="message"
                    className={`${styles.input} py-1.5 resize-none h-[15rem]`}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <button
            type="button"
            disabled={!isFormValid}
            className={!isFormValid ? "disabledButton" : ""}
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </div>
      </form>
   
      
    </div>
    <Footer/>
  </>
    
  );
}
