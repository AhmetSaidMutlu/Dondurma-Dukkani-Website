import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <div className="app__wrapper_info">
        <SubHeading title="Lezzet Şöleni Başlıyor!" />
        <h1 className="app__header-h1">Erzincan&apos;ın yegane dondurmacısı! Farklı doğal dondurma lezzetleri sizi bekliyor.</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>Her bir tat, doğanın sunduğu en kaliteli malzemelerle özenle hazırlanır. Damaklarınıza eşsiz bir lezzet deneyimi sunmak için buradayız.</p>
        <button type="button" className="custom__button">Adres Bilgileri İçin Tıklayın</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header_img" />
      </div>
    </div>
  </div>
);

export default Header;
