import React, { useState, useContext, ChangeEvent } from 'react';
import Modal from '../modal/Modal';
import { AiOutlineClose } from 'react-icons/ai';
import sendEmail from '../../utils/SubmitFunction';
import { DarkModeContext } from '../../context/DarkModeContext';
import { useToggle } from '../../hooks/customToggle';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts: React.FC = () => {
  const [data, setUserData] = useState({
    name: '',
    surname: '',
    message: '',
  });

  const { darkMode } = useContext(DarkModeContext);

  const Theme = darkMode ? 'dark-theme' : 'light-theme';

  const [phone, setPhoneNumber] = useState<string>('');
  const [isModalOpen, setModalOpen] = useToggle();
  const { message, name, surname } = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const values = surname === '' || name === '' || phone === '' || message === '';

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
                name="name"
              />
            </div>
            <div>
              <input
                placeholder="Прізвище"
                onChange={handleChange}
                className="contact-form__input"
                type="text"
                name="surname"
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
                name="message"
                placeholder="Повідомлення"
                onChange={handleChange}
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
            {isModalOpen && !values ? (
              <Modal>
                <p className="thank-you-text">Дякуємо!В найближчий час ми з вами зв'яжемося.</p>
              </Modal>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
