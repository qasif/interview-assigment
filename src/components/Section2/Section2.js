import Card from '../card/card';
import './Section2.css';

const Section2 = ({ Section2data }) => {
  console.log('vhgcvshgchdschdsgd', Section2data);
  let messg =
    'Complete portfolio of services to  empower our customers for the future';

  let messg2 =
    'Select partnerships, technologies and platforms that we support';

  let moreimg =
    'https://static.wixstatic.com/media/23ba9d_39834b53e4f142bdbd57a168c5b0b54a~mv2.png/v1/fill/w_300,h_123,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/tools%20and%20platforms.png';
  return (


    <div className='maindiv py-5'>
          <div className='container'>

      <div>
        <h2 className='h22main'>Service</h2>
        <p className='p2'>{messg}</p>
      </div>
      <div className='dflex2'>
        {Section2data.map((el) => {
          return (
            <div>
              <Card  url={el.url} messg={el.messg} messg2={el.messg2}/>
            </div>
            
          );
        })}
      </div>
      <h1 className='mt-5'>
        <span className='span2'>{messg2}</span>
      </h1>
      <div>
        <img className='img1' src={moreimg}></img>
      </div>
    </div>
    </div>

  );
};
export default Section2;
