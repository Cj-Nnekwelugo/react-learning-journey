

import Menu from "./components/Menu";
import ContactForm from "./components/ContactForm";
import Counter from "./components/Counter";
import Input from "./components/Input"
import LightSwitch from "./components/LightSwitch";

import ProductList from "./components/ProductList";
import CourseForm from "./components/CourseForm";
import TransactionList from "./components/TransactionList";
import WelcomeMessage from "./components/WelcomeMessage";
import BookingForm from "./components/BookingForm";



function App() {
  return (
    <>
    <Menu />
    <BookingForm />
    <CourseForm />

  
      <WelcomeMessage />
      <TransactionList />
      <ContactForm />
      <Counter />
      

      <div className="w-full flex flex-col items-center gap-11 ">
        <h3 className="font-bold text-4xl">Products</h3>

       <ProductList />
      </div>

      <Input />

      <LightSwitch />
      

     
    </>
  );
}

export default App;
