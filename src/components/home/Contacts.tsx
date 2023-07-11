import React from 'react';

const Contacts: React.FC = () => {
  return (
    <section>
      <div className="contacts-container">
        <h3 className="second-heading">Контакти</h3>
        <address>
          <ul>
            <li>
              <p>Телефон</p>
              <a href="tel:+380950335563">+380950335563</a>
            </li>
            <li>
              <p>Адреса:</p>
              <p>вул.Спортивна 3, Остриця, Чернівецька обл.</p>
            </li>
          </ul>
        </address>
        <ul>
          <li>
            <p>Режим роботи:</p>
            <p>
              Понеділок-П'ятниця <time>8:00-21:00</time>
            </p>
            <p>
              Субота <time>10:00-19:00</time>
            </p>
            <p>Неділя вихідний</p>
          </li>
        </ul>

        <button type="button">Дістатися</button>
      </div>
    </section>
  );
};

export default Contacts;
