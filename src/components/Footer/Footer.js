import fbicon from '../../Assests/fbicon.webp';
import phoneicon from '../../Assests/phoneicon.webp';
import inicon from '../../Assests/inicon.webp';
import emailicon from '../../Assests/emailicon.webp';
import navbarimg1 from '../../Assests/navbarimg1.webp'
import navbarimg2 from '../../Assests/navbarimg2.webp'
import './Footer.css';

function Footer () {
    
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-3">
                    <a href='tel:+1-908-509-1522'>
                    <img className="mx-2" data-aos="flip-up" src={phoneicon}/>

                    </a> 
                    <a href='href="mailto:info@rgs-tech.com"'>
                    <img className="mx-2" data-aos="flip-up" src={emailicon}/>

                        </a>   
                </div>

                <div className="col-6 middlesection">
                    <img src={navbarimg1}/>
                    <img src={navbarimg2}/>
                    <div>
                    <a href='https://www.rgs-tech.com/_files/ugd/23ba9d_aa97d613e9fe417ca74df005e1cd7493.pdf'>RGS privacy Policy</a>

                    </div>
                    <p>All Rights Reserved, Copyright RGS-Tech</p>
                    <p>Hackettstown,</p>
                    <p>NJ 07840</p>
                    <p>USA</p>
                </div>

                <div className="col-3">
                    <a href='https://www.facebook.com/RGSDigital/?view_public_for=280342016002143'>
                    <img className="mx-2" data-aos="flip-down" src={fbicon}/>

                    </a>
                    <a href='https://www.linkedin.com/company/rgs-tech/'>
                    <img className="mx-2" data-aos="flip-down" src={inicon}/>

                    </a>
                </div>

            </div>
        </div>
    )
}

export default Footer;