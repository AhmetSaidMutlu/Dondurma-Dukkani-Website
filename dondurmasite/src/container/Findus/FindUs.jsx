

import { SubHeading } from '../../components';
import Map from './map'

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Adres</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Adres yazıs Buraya gelecek Adres yazıs Buraya gelecek Adres yazıs Buraya gelecek</p>
        <p className="p__cormorant" style={{ color: '#0C0C0C', margin: '2rem 0' }}>Çalışma Saatleri</p>
        <p className="p__opensans">pazartesi - Cumartesi: 07:00  - 02:00 </p>
        <p className="p__opensans">Pazar: 10:00  - 23:00 </p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Bizi Ziyaret Edin</button>
    </div>

    <div className="app__wrapper_img"> 
      <Map/>
    </div>
  </div>
);

export default FindUs;
