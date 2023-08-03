import React from 'react';
import { GiPhone } from 'react-icons/gi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { CiCalendar } from 'react-icons/ci';
import FindLocation from 'src/utils/Geolocation';
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
              <p className="loc">вул.Спортивна 3, Остриця, Чернівецька обл.</p>
            </li>
          </ul>
        </address>
        <ul>
          <Breakpoint large up>
            <li>
              <p className="calendar-icon">
                <CiCalendar />
              </p>
            </li>
          </Breakpoint>
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
        <FindLocation />
      </div>
    </section>
  );
};

export default Contacts;
