import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3.js/Section3';
import Section5 from './components/Section5/Section5';
import Section6 from './components/Section6/Section6';
import Footer from './components/Footer/Footer';

let navbardata = [
  {
    name: 'Home',
    url: 'google.com',
  },
  {
    name: 'Service',
    url: 'google.com',
  },
  {
    name: 'Industries',
    url: 'google.com',
  },
  {
    name: 'About us',
    url: 'google.com',
  },
  {
    name: 'Contact Us',
    url: 'google.com',
  },
];

let Section1data = [
  {
    url: 'https://static.wixstatic.com/media/23ba9d_6281d07a16c84e1e8bb3a6bdba7374b4~mv2.png/v1/fill/w_43,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Blind%201.png',
    messg: 'Eliminate Blind sport',
    logo: '+',
  },
  {
    url: 'https://static.wixstatic.com/media/23ba9d_c6d909fc45bf45fd98c3657fbcc8ca9e~mv2.png/v1/fill/w_52,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/digital%202.png',
    messg: 'Achevie Digital Transformation',
    logo: '+',
  },
  {
    url: 'https://static.wixstatic.com/media/23ba9d_8518c14caec2484eba60c4ca1f42fbf7~mv2.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/decision%203.png',
    messg: 'Accelerate Decision',
    logo: '+',
  },
  {
    url: 'https://static.wixstatic.com/media/23ba9d_7ad7f21498ae4d61a7346d1bb93b706b~mv2.png/v1/fill/w_58,h_46,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/growth%204.png',
    messg: 'Drive Growth and ROI',
    logo: '+',
  },
];

let Section2data = [
  {
    url: 'https://static.wixstatic.com/media/23ba9d_ac7d5f7852ec4db791ed17cb70683d1b~mv2.png/v1/fill/w_43,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Consulting.png',
    messg: 'Data Engineering and Solutions',
    messg2: 'Learn more',
  },
  {
    url: 'https://static.wixstatic.com/media/23ba9d_f10470c7e3d1495ba9dfa23ab00db938~mv2.png/v1/fill/w_43,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Digital%20Engg.png',
    messg: 'Digital Engineering and Transformatio',
    messg2: 'Learn more',
  },
  {
    url: 'https://static.wixstatic.com/media/23ba9d_1458f4b823494c14bef1aa7086bc697b~mv2.png/v1/fill/w_43,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cloud%20Engg.png',
    messg: 'Cloud Engineering and Platforms',
    messg2: 'Learn more',
  },
  {
    url: 'https://static.wixstatic.com/media/23ba9d_ac7d5f7852ec4db791ed17cb70683d1b~mv2.png/v1/fill/w_43,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Consulting.png',
    messg: 'Consulting and Advisory',
    messg2: 'Learn more',
  },
];
let listitems = [
  {
    Text: 'Quick Facts'
  },
  {
    url: 'https://static.wixstatic.com/media/23ba9d_e622ebd4799d4579a1268216eb7f0bdb~mv2.png/v1/fill/w_34,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Partners.png',
    Text: 'Customer Delight',
  },
  {
    url: 'https://static.wixstatic.com/media/23ba9d_4915eb2f897a43749bb6301b07665561~mv2.png/v1/fill/w_34,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Services.png',
    Text: 'Innovative Services and Solutions',
  },
  {
    url: 'https://static.wixstatic.com/media/23ba9d_6fa84f20bb784faaa8d2ab1fc6ec44bd~mv2.png/v1/fill/w_34,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Industry.png',
    Text: 'Various Industry Verticals',
  },
  {
    url: 'https://static.wixstatic.com/media/23ba9d_e323b9e44a3949b9a81296d9d75a6cc5~mv2.png/v1/fill/w_34,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Nearshore.png',
    Text: 'Nearshore and Offshore Centers',
  },
  {
    url: 'https://static.wixstatic.com/media/23ba9d_adad166db6b74f1faac27aefbe936360~mv2.png/v1/fill/w_34,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/team.png',
    Text: 'Experienced Consultants',
  },
  {
    url: 'https://static.wixstatic.com/media/23ba9d_526f809ddabe46b39cb2c374d96ad547~mv2.png/v1/fill/w_34,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Delight.png',
    Text: 'Niche Partner Ecosystem'
  },
]

let Section5data = [
  {
    url: 'https://static.wixstatic.com/media/23ba9d_b8e3ec61a79948208debdec206296df6~mv2.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/BFS.png',
    messg: 'Banking, Insurance and Financial Services',
    messg2: 'Learn more',
  },
  {
    url: 'https://static.wixstatic.com/media/23ba9d_865c0e9c415948b180f91a73feb6a975~mv2.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ttl%20new.png',
    messg: 'Travel, Transportation and Hospitality',
    messg2: 'Learn more',
  },
  {
    url: 'https://static.wixstatic.com/media/23ba9d_865c0e9c415948b180f91a73feb6a975~mv2.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ttl%20new.png',
    messg: 'Healthcare, Pharma and Lifesciences',
    messg2: 'Learn more',
  },
  {
    url: 'https://static.wixstatic.com/media/23ba9d_865c0e9c415948b180f91a73feb6a975~mv2.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ttl%20new.png',
    messg: 'Retail, Consumer Products and Goods',
    messg2: 'Learn more',
  },
  {
    url: 'https://static.wixstatic.com/media/23ba9d_865c0e9c415948b180f91a73feb6a975~mv2.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ttl%20new.png',
    messg: 'Telecom and Manufacturing',
    messg2: 'Learn more',
  },
];
 

function App() {
  return (
    <div>
      <div>
        <Navbar navbardata={navbardata} />
      </div>
      <div>
        <Section1 Section1data={Section1data} />
      </div>
      <div>
        <Section2 Section2data={Section2data} />
      </div>
      <div>
        <Section3 listitems={listitems} />
      </div>
      <div>
        <Section5 Section5data={Section5data} />
      </div>
      <Section6/>
      <Footer/>
    </div>
  );
}

export default App;
