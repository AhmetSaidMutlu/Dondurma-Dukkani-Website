

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="İmalatçının Sözü" />
      <h1 className="headtext__cormorant">Nasıl Dondurma Yapıyoruz?</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">test test test test test test test test test test test test.</p>
        </div>
        <p className="p__opensans"> test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test. </p>
      </div>

      <div className="app__chef-sign">
        <p>İsim Soyisim</p>
        <p className="p__opensans">Usta & İşletme Sahibi</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
