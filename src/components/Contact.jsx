import React, {useState, useEffect} from "react";

function Contact(){
    const [button, setButton] = useState(false)
    
    const handleClick = () => {
        setButton(!button)
    }
        
        useEffect(() => {
            if(button === true){
        setTimeout(() => setButton(!button), 100)}
    }, [handleClick])
   
    return(
        <section className=" dark:bg-gray-900">
  <div className="py-8 pt-[250px] px-4 mx-auto max-w-screen-md h-[50%]">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-slate-100 dark:text-white">Contact Me</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-300 dark:text-gray-400 sm:text-xl">If you are interested in working together or have business opportunities even want to learn more about me? Feel free to contact me below!</p>
      <form action="#" className="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-slate-100 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-slate-100 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-slate-100 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <div className={button ? " transition-shadow duration-100 w-[18%] bg-opacity-30 rounded-lg bg-gray-600" : "bg-gray-600 duration-100 w-[18%] bg-opacity-30 rounded-lg shadow-xl shadow-black"}>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleClick}>Send message</button>
          </div>
      </form>
  </div>
</section>
    )
}

export default Contact;