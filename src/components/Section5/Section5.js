import Card from '../card/card';
import './Section5.css'

const Section5 = ({ Section5data }) => {
    let lastmessg = 'Solutions Customized for each Industry';
  let heading = 'Key Industries and Verticals';
  return (
    <div className='maindiv '>
      <div className='container'>
        
      <span className='spansec5'>{heading}</span>
      <div className=' d-flex justify-content-between my-5'>
        {
            Section5data.map((el)=>{
                return(
                  <Card url={el.url} messg={el.messg} messg2={el.messg2}/>

      //                  <div>
      //    <div className='div3'>
      //      <img className='image' src={el.url}></img>
      //    </div>
      //    <div>
      //      <span className='span2'>{el.Text}</span>
      //    </div>
      //    <div>
      //      <span>{el.messg2}</span>
      //    </div>
      //  </div>
                )
            })
        }
        </div>
        <span  className='lastspan'>{lastmessg}</span>
      </div>
        </div>
        );
};
export default Section5