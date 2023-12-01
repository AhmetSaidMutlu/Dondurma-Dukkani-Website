
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';


import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
 

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Bizimle İletişime Geçin</h1>
        <p className="p__opensans">örnek adres örnek adres örnek adres örnek adres</p>
        <p className="p__opensans">555 555 55 55</p>
        <p className="p__opensans">556 556 56 56</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;Kendini bulmanın en iyi yolu, diğerlerine hizmet ederken kendini işe vermektir.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Çalışma Saatleri</h1>
        <p className="p__opensans">Pazartesi - Cumartesi:</p>
        <p className="p__opensans">08:00  - 02:00 </p>
        <p className="p__opensans">Pazar:</p>
        <p className="p__opensans">10:00  - 23:00 </p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Tadı Moda. Tüm Hakları Saklıdır.</p>
    </div>

  </div>
);

export default Footer;
