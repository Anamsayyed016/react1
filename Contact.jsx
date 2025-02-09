function Contact(){
    return(
        <>
            <section>
            <div  class="contact-container">
        <form class="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required/>
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
        </form>
               </div>
            </section>

            <footer class="footer">
        <p>&copy; 2025 YourCompany. All Rights Reserved.</p>
        <p>
            <a href="#">Privacy Policy</a> |
            <a href="#">Terms of Service</a> |
            <a href="#">Contact</a>
        </p>
        <div class="social-icons">
            
        </div>
    </footer>
        </>
    )
}

export default Contact
