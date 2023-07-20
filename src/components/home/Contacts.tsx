import React from 'react';
import { GiPhone } from 'react-icons/gi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { CiCalendar } from 'react-icons/ci';
import { Breakpoint } from 'react-socks';

const Contacts: React.FC = () => {
  return (
    <section>
      <div className="contacts-container">
        <h3 className="second-heading">Контакти</h3>
        <address className="address">
          <ul>
            <li className="address-list__item">
              <p>
                <GiPhone />
              </p>
              <a className="contacts__link" href="tel:+380950335563">
                +380950335563
              </a>
            </li>
            <li className="address-list__item">
              <p>
                <MdOutlineLocationOn />
              </p>
              <p>вул.Спортивна 3, Остриця, Чернівецька обл.</p>
            </li>
          </ul>
        </address>
        <ul>
          <li>
            <p>
              <CiCalendar />
              <Breakpoint large up>
                Режим роботи:
              </Breakpoint>
            </p>
          </li>
          <li>
            <p className="schedule-desc">
              Понеділок- П'ятниця
              <time>8:00-21:00</time>
            </p>
          </li>
          <li>
            <p className="schedule-des">
              <span>Субота</span> <time>10:00-19:00</time>
            </p>
            <p className="schedule-desc">
              <span> Неділя</span> <span>вихідний</span>
            </p>
          </li>
        </ul>
        <button type="button">Дістатися</button>
      </div>
    </section>
  );
};

export default Contacts;
