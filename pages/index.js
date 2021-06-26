import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../Images/restaurant-nidda.png';
import flLogo from '../Images/Fleksa.svg';
import flag from '../Images/flag.png';
import ContactUs from './ContactUs';
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  const handleClick = () => {
    const div = document.getElementById("navbarNav");
    div.classList.toggle("show")
  }
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Created by Minhazul Abedin" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
      </Head>

      <header className={styles.header}>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent mx-4">
          <div className="container-fluid">
            <Link href="/">
              <a><Image src={logo} height={60} width={100} alt="logo"></Image></a>
            </Link>
            <button className="navbar-toggler" onClick={handleClick}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-4 text-uppercase">
                  <Link className="nav-link" href="/">
                    <a className=" fw-bold">Menu</a>
                  </Link>
                </li>
                <li className="nav-item mx-4 text-uppercase">
                  <Link className="nav-link" href="/">
                    <a className=" fw-bold">Reservation</a>
                  </Link>
                </li>
                <li className="nav-item mx-4 text-uppercase">
                  <Link className="nav-link" href="/">
                    <a className=" fw-bold">Gallery</a>
                  </Link>
                </li>
                <li className="nav-item mx-4 text-uppercase">
                  <Link className="nav-link" href="/">
                    <a className=" fw-bold">Contact</a>
                  </Link>
                </li>
                <li className="nav-item mx-4 text-uppercase">
                  <Link className="nav-link" href="/">
                    <a className=" fw-bold">Sign In</a>
                  </Link>
                </li>
                <li className="nav-item mx-4">
                  <Link className="nav-link" href="/">
                    <a><Image className="rounded-circle" height={30} width={30} src={flag} alt="flag"></Image></a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className={styles.contactBox}>
        <ContactUs/>
      </main>

      <footer className={styles.footer + " " + "bg-dark text-white"}>
        <div className="row justify-content-evenly align-items-center">
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <p>Ludwig-Landmann-Straße 326 <br />
              60487 Frankfurt am Main <br />
              nidda2012@web.de <br />
              +49 6927295936</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <p className="d-flex justify-content-center align-items-center">
              Powered by 
              <Image src={flLogo} height={15} width={100} alt="Fleksa-logo"></Image>
            </p>
            <p className="ps-3">©2021 Fleksa</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <div>
              <FontAwesomeIcon className={styles.icon} icon={faInstagram}/>
              <FontAwesomeIcon className={styles.icon} icon={faFacebookSquare}/>
              <FontAwesomeIcon className={styles.icon} icon={faTwitter}/>
            </div>
            <div>
              <p>
                <Link href="/">
                  <a>AGB</a>
                </Link>
                 | 
                <Link href="/">
                  <a>Datenschutzerklärung</a>
                </Link>
                 |
                <Link href="/">
                  <a>Impressum</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
