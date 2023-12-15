"use client"
import React, {useState} from "react";
import styles from "./contacto.module.css";

export default function Contacto() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message, setMessage]=useState("")
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");
    

    const isFormValid = name.trim() !== "" && email.trim() !== "" && message.trim() !== "";

    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("Please enter a valid email address");
        return;
      }
  
      // Reset email error if valid
      setEmailError("");
  
      // Perform form validation
      if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        // Display an error message or handle invalid form
        return;
      }
  
      // Form is valid, proceed with submitting the form
      console.log("Form submitted");
    };
  return (
    <div className={styles.main}>
      <h1>
        RELLENE EL FORMULARIO O ENVÍE UN
        <br /> CORREO ELECTRÓNICO A
      </h1>
      <h2>INFO@CO.PICKLEBALL</h2>
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
                    onChange={(e)=>{setName(e.target.value)}}
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
                    onChange={(e)=>{setEmail(e.target.value)}}
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
                    onChange={(e)=>{setMessage(e.target.value)}}
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
          >
            Enviar
          </button>
       
        </div>
      </form>
    </div>
  );
}
