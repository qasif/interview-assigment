import navbar1img from '../../Assests/navbarimg1.webp';
import navbar2img from '../../Assests/navbarimg2.webp';
import navbar3img from '../../Assests/Videoimg.png';
import './Navbar.css' 


const Navbar = ({ navbardata }) => {

  let messg = 'Empowering our customer for the Future'
  return (

    <div className='container' data-aos="flip-left">

    <div className='row py-4 '>
      <div className='col-2 d-flex'>
        <img src={navbar1img}></img>
        <img src={navbar2img}></img>
      </div>
      {navbardata.map((navitem, index) => {
        return (
          <div className='col-2 d-flex align-items-center justify-content-center'>
            <a
              className={index === 0 ? 'active mx-4 link' : 'mx-4 link'}
              href={navitem.url}>
              {navitem.name}
            </a>
          </div>
        );
      })}
      <div className='col-6 py-4 ' data-aos="fade-up"
     data-aos-duration="3000">
        <p className={'paragraph'}>{messg}</p>
      </div>
      <div  className='col-6 py-4' data-aos="fade-up"
     data-aos-duration="3000">
        <img src={navbar3img}></img>
      </div>
    </div>
    </div>


  );
};
export default Navbar;
