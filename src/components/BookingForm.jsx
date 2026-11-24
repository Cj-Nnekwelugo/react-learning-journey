function BookingForm() {
    return(
        <div className="flex flex-col gap-4 bg-blue-400 ">
            <h2 className="font-bold ">Registrtion</h2>

            <form className="border  py-6 rounded-3xl shadow-xl gap-6"
            >
                <input type="text"
                placeholder="Enter your full name"
                 />


                 <input type="email"
                 placeholder="ex: john@gmail.com"
                  />
            </form>
        </div>
    )
};

export default BookingForm;