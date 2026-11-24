import { useState } from "react";

function BookingForm() {
    const [fullName, setfullName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    function handleChange(event) {
        set
    }

    return(
        <div className="flex flex-col gap-4  max-w-md">
            <h2 className="font-bold text-2xl">Registrtion</h2>

            <form className="border flex flex-col py-10 px-6 rounded-3xl shadow-xl gap-6"
            >
                <input type="text"
                placeholder="Enter your full name"
                value={fullName}
                 />


                 <input type="email"
                 placeholder="ex: john@gmail.com"
                 value={email}
                  />

                  <input type="password" 
                  placeholder="Enter your password"
                  value={password}

                  />
            </form>
        </div>
    )
};

export default BookingForm;