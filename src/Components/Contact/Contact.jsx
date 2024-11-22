import React ,{useState }from 'react'
import './Contact.css'
import mes  from '../../assets/msg-icon.png'
import mail  from '../../assets/mail-icon.png'
import phone  from '../../assets/phone-icon.png'
import location  from '../../assets/location-icon.png'
import white from '../../assets/white-arrow.png'
const Contact = () => {

      const [result, setResult] = React.useState("");
    
      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a64c483e-01c9-4b58-865a-6f5d69f345d5");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    
  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={mes} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid soluta optio ea ducimus, illo omnis sed rem, nam hic nihil minus reprehenderit cum veniam ad ullam, in est possimus quaerat.</p>
       <ul>
        <li><img src={mail} alt="" />Contact@Jeelan.dev</li>
        <li><img src={phone} alt="" />+91 7095117592</li>
        <li><img src={location} alt="" />11/300 , Edustreet , Barcelona </li>
        <li> Contact@Jeelan.dev</li>
       </ul>
       
        </div>
        <div className="contact-col">
<form onSubmit={onSubmit}>
    <label htmlFor="">Your Name</label>
    <input type="text" name='name' placeholder='Enter your name' required />
    <label htmlFor="">Phone Number</label>
    <input type="tel" name='phone' placeholder='Enter Mobile number' required/>
<label htmlFor="">Write your message here</label>
<textarea name="message" id="" rows='6' placeholder='Enter your message' required></textarea> 
<button className='btn dark-btn' type='submit'>Submit now <img src={white} className='' alt="" /></button>
    </form>
    <span >
    {result}
    </span>
        </div>
    </div>
  )
}

export default Contact