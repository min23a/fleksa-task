import { faChevronRight, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head'
import Image from 'next/image';
import pic from '../Images/contact_us_main_img.svg'
import styles from '../styles/Contact.module.css'

const ContactUs = () => {
    return (
        <div className="d-flex flex-column-reverse flex-sm-row justify-content-center">
            <div id="contact-form" className={"p-3" + " " + styles.contactFormBox}>
                <h1>Write Us</h1>
                <p>We will get back to you as soon as possible.</p>
                <form>
                    <div className="d-flex flex-column flex-sm-row">
                        <div className="m-1 col-lg-5 col-md-6 col-sm-8">
                            <label className="fw-bold" htmlFor="name">Name</label>
                            <input className="form-control mb-3" type="text" name="name" id="name" />
                        </div>
                        <div className="m-1 col-lg-5 col-md-6 col-sm-8">
                            <label className="fw-bold" htmlFor="email">E-mail</label>
                            <input className="form-control mb-3" type="text" name="email" id="email" />
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-sm-row">
                        <div className='col-lg-5 col-md-6 col-sm-8'>
                            <label className="fw-bold" htmlFor="subject">Subject</label>
                            <input className="form-control mb-3" type="text" name="subject" id="subject" />
                            <label className="fw-bold" htmlFor="message">Your Message</label>
                            <textarea className="form-control mb-3" type="text"></textarea>
                        </div>
                        <div className={styles.image}>
                            <Image height={300} width={300} src={pic} alt="pic" />
                        </div>
                    </div>
                    <input type="checkbox" name="check" id="check" />
                    <label htmlFor="check" className="mx-2">Yes, I agree to the terms and conditions and privacy policy</label>
                    <button style={{borderRadius : '13px'}} className="btn btn-dark py-2 px-4 d-block fw-bold my-3">Submit</button>
                </form>
            </div>
            <div className={styles.vertical}>
                <table className="table table-borderless w-75 m-auto">
                    <tbody>
                        <tr>
                            <td >Sunday</td>
                            <td className="fw-bold">10:30 - 22:00</td>
                        </tr>
                        <tr>
                            <td >Monday</td>
                            <td className="fw-bold">10:30 - 22:00</td>
                        </tr>
                        <tr>
                            <td >Tuesday</td>
                            <td className="fw-bold">10:30 - 22:00</td>
                        </tr>
                        <tr>
                            <td >Wednesday</td>
                            <td className="fw-bold">10:30 - 22:00</td>
                        </tr>
                        <tr>
                            <td >Thursday</td>
                            <td className="fw-bold">10:30 - 22:00</td>
                        </tr>
                        <tr>
                            <td className="fw-bold text-decoration-underline ">Friday</td>
                            <td className="fw-bold">10:30 - 22:00</td>
                        </tr>
                        <tr>
                            <td >Saturday</td>
                            <td className="fw-bold">10:30 - 22:00</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <div className={styles.contactBox}>
                        <FontAwesomeIcon style={{height : '30px'}} icon={faEnvelope} />
                        <small className="fw-bold">nidda2012@web.de</small>
                        <small>E-mail</small>
                        <FontAwesomeIcon style={{height : '15px'}} icon={faChevronRight}/>
                    </div>
                    <div className={styles.contactBox}>
                        <FontAwesomeIcon style={{height : '30px'}} icon={faPhoneAlt} />
                        <small className="fw-bold">+49 6927295936</small>
                        <small>Telephone</small>
                        <FontAwesomeIcon style={{height : '15px'}} icon={faChevronRight} />
                    </div>
                </div>
                <iframe className={styles.Map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.6243718961687!2d8.617810714975041!3d50.13075051823114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd099fe5f30895%3A0x71dd891bc17e5705!2sRestaurant%20Nidda!5e0!3m2!1sen!2sbd!4v1624599755039!5m2!1sen!2sbd"  style={{border : "0"}} loading="lazy"></iframe>
                <div className={styles.contactBox} id="location">
                    <FontAwesomeIcon style={{ height: '30px' }} icon={faMapMarkerAlt}/>
                    <small className="fw-bold">Ludwig-Landmann-Strasse 326 <br />
                        60487 Frankfurt am Main</small>
                    <small>Map</small>
                    <FontAwesomeIcon style={{ height: '15px' }} icon={faChevronRight} />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;