import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
        <form action="https://getform.io/f/fb692458-f269-42f2-83a9-4a521c02e758" method="POST">
    <input type="text" name="name"/>
    <input type="email" name="email"/>
    <input type="text" name="message"/>
    
    <input type="hidden" name="_gotcha" style={{  display:"none" }} />
    
    <input type="checkbox" name="subscribe" value="yes" checked/>
    <input type="hidden" name="subscribe" value="no"/>
    
    <input type="radio" name="gender" value="male" checked/>
    <input type="radio" name="gender" value="female"/>
    <input type="radio" name="gender" value="other"/>
    
    <select name="work-experience">
        <option value="one-year">0-1 years</option>
        <option value="one-five-years">1-5 years</option>
    </select>
    <button type="submit">Send</button>
</form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
