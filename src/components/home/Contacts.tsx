import React from 'react';
import { GiPhone } from 'react-icons/gi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { CiCalendar } from 'react-icons/ci';

const Contacts: React.FC = () => {
  return (
    <section>
      <div className="contacts-container">
        <h3 className="second-heading">Контакти</h3>
        <address>
          <ul>
            <li>
              <p>
                <GiPhone style={{ marginRight: '10px' }} />
                Телефон
              </p>

              <a style={{ marginLeft: '25px' }} className="contacts__link" href="tel:+380950335563">
                +380950335563
              </a>
            </li>
            <li>
              <p>
                <MdOutlineLocationOn /> Адреса:
              </p>
              <p style={{ marginLeft: '25px' }}>вул.Спортивна 3, Остриця, Чернівецька обл.</p>
            </li>
          </ul>
        </address>
        <ul>
          <li>
            <p>
              <CiCalendar /> Режим роботи:
            </p>
            <p style={{ marginLeft: '25px' }}>
              Понеділок-П'ятниця <time>8:00-21:00</time>
            </p>
            <p style={{ marginLeft: '25px' }}>
              Субота <time>10:00-19:00</time>
            </p>
            <p style={{ marginLeft: '25px' }}>Неділя вихідний</p>
          </li>
        </ul>

        <button type="button">Дістатися</button>
      </div>
    </section>
  );
};

export default Contacts;
