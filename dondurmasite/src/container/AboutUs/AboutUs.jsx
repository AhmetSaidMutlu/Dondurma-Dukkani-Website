

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__header app__wrapper section__padding" >
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">Hakkımızda</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">Biz, dondurma tutkusuyla yanıp tutuşan bir ekibiz. Lezzet yolculuğumuzda en kaliteli ve doğal malzemeleri seçerek, damakları mutlulukla buluşturuyoruz. Her bir dondurma çeşidimiz, özenle hazırlanmış tarifler ve titiz işçilikle ortaya çıkıyor.
            Misyonumuz, her bir dilimde doğanın taptaze tatlarını sunarak müşterilerimizi tatlı bir keyif yolculuğuna çıkarmaktır. Saflık ve lezzeti bir araya getirerek, en iyi dondurma deneyimini sunmak için çalışıyoruz. Dondurma aşkımızı, her kaseyi bir gülümsemeyle dolduracak şekilde yansıtmak bizim için bir onurdur.
            Sizleri, içinde sevgi, lezzet ve doğallığın bir araya geldiği bu lezzetli dünyamızda ağırlamaktan mutluluk duyarız.</p>

        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Hikayemiz</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">Dondurma aşkıyla 5 yıl önce yola çıktık. İlk adımdan itibaren, en taze malzemeleri seçerek, el emeğiyle dondurma yapmaya başladık. Tutkumuz ve özverimiz, her bir dilimde damaklara tazelik ve mutluluk taşıdı. Zaman içinde, lezzetlerimiz insanların favorileri haline geldi.
            Tatlarımızın her biri, yılların birikimi ve deneyimlerin sonucu olarak ortaya çıktı. Lezzetlerimizi geliştirmek ve çeşitlendirmek adına sürekli arayış içinde olduk. Bugün, kaliteyi koruyarak, her bir tabakta taptaze tatlar sunmaktan gurur duyuyoruz.
            Müşterilerimize en iyi dondurma deneyimini sunmaya devam ederken, ilk günkü özenimizi korumaya kararlıyız. </p>

        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
