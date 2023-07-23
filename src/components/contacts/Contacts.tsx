import React, { useState, useContext, ChangeEvent, useEffect } from 'react';
import Modal from '../modal/Modal';
import validator from 'validator';
import sendEmail from '../../utils/SubmitFunction';
import { DarkModeContext } from '../../context/DarkModeContext';
import { useToggle } from '../../hooks/customToggle';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts: React.FC = () => {
  const [data, setUserData] = useState({
    name: '',
    message: '',
  });
  const { darkMode } = useContext(DarkModeContext);

  const Theme = darkMode ? 'dark-theme' : 'light-theme';

  const [email, setEmailError] = useState<string>('');
  const [phone, setPhoneNumber] = useState<string>('');
  const [isModalOpen, setModalOpen] = useToggle();
  const { message, name } = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const values =
    name === '' || email === '' || phone === '' || message === '' || email !== 'Правильно';

  const validateEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      toast.success('Вірно');
    } else {
      toast.error('Будь-ласка правильний email');
    }
  };

  const validatePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const phone = e.currentTarget.value;
    if (!Number(phone)) {
      toast.error('Тільки номер');
    } else {
      setPhoneNumber(e.currentTarget.value);
    }
  };

  return (
    <main>
      <ToastContainer limit={1} />
      <section>
        <div className={`${Theme} contact-container`}>
          <form onSubmit={sendEmail} className="contact-form">
            <h2 className="contact-form__heading">Записатися</h2>
            <div>
              <input
                placeholder="Ім'я"
                onChange={handleChange}
                className="contact-form__input"
                type="text"
              />
            </div>
            <div>
              <input
                placeholder="Прізвище"
                onChange={handleChange}
                className="contact-form__input"
                type="text"
              />
            </div>
            <div>
              <input
                placeholder="Пошта"
                onChange={validateEmail}
                className="contact-form__input"
                type="email"
              />
            </div>
            <div>
              <input
                name="phone"
                maxLength={12}
                placeholder="Телефон"
                onChange={validatePhoneNumber}
                className="contact-form__input"
                type="tel"
              />
            </div>
            <div>
              <textarea
                className="contact-form__textarea"
                name=""
                placeholder="Повідомлення"
              ></textarea>
            </div>
            <button
              disabled={values ? true : false}
              type="submit"
              onClick={() => setModalOpen.toggle()}
              className="contact-form__btn"
            >
              {values ? 'Записатися' : 'Відправити'}
            </button>
            {isModalOpen ? (
              <Modal>
                {/* <ContactsBackdrop>
                  <ModalContacts> */}
                <p>Дякуємо!В найближчий час ми з вами зв'яжемося.</p>
                {/* </ModalContacts>
                </ContactsBackdrop> */}
              </Modal>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
