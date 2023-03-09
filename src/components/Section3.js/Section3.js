import './Section3.css';
const Section3 = ({ listitems }) => {
    let Thought = 'At Rhombus Global Services, we deliver data, digital and cloud technology transformation and  services from strategy to implementation.'
    let Thought2 = 'We enable innovative solutions across  variety of industry segments and cater to organizations of various sizes.  We believe in long-term partnerships, and our services are designed for value and the specific needs' 

    let Thought3 = 
    'To be unique in every part of the business we operate and provide exceptional value'

    let Thought4 = 'We specialize in helping organize eliminate blind spots by uncovering data and business insights, accelerating digital transformation, leveraging automation for optimization and ROI and taking a quantum leap in growth'

  return (
    <div className='maindiv py-5'>
      <div>
        <span className='span3'>About Us</span>
      </div>
      <div className='container'>

      <div className='row mt-5'>
        <div className=' col-6'  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
          {listitems.map((list) => {
            return (
              <div className='listitems'>
                <span className='spanlist'>{list.Text}</span>
                <img src={list.url}></img>
              </div>
            );
          })}
        </div>
        <div className='messgdiv col-6'>
          <div>
            <span>Our Focus</span>
            <p>{Thought}</p>
            <p>{Thought2}</p>
          </div>
        </div>
        
        <div className='messgdiv col-6 mt-5'>
          <div>
            <span>Our Focus</span>
            <p>{Thought3}</p>
            <p>{Thought4}</p>
          </div>
        </div>
        <div className=' col-6 mt-5'  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
          {listitems.map((list) => {
            return (
              <div>
                <span className='spanlist'>{list.Text}</span>
                <img src={list.url}></img>
              </div>
            );
          })}
        </div>
      </div>
      </div>

    </div>
  );
};
export default Section3;
