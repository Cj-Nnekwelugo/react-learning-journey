function BookingForm() {
    return(
        <div className="flex flex-col gap-4  max-w-md">
            <h2 className="font-bold text-2xl">Registrtion</h2>

            <form className="border flex flex-col py-10 px-6 rounded-3xl shadow-xl gap-6"
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