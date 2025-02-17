import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import "../styles/Fonts.css";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const [state, handleSubmitFormspree] = useForm("xnnjvkgw");
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [fieldsCompleted, setFieldsCompleted] = useState(true);
  const [nameRequired, setNameRequired] = useState(false);
  const [emailRequired, setEmailRequired] = useState(false);
  const [phoneRequired, setPhoneRequired] = useState(false);
  const [messageRequired, setMessageRequired] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstName':
        setfirstName(value);
        setNameRequired(!value);
        break;
      case 'lastName':
        setlastName(value);
        setNameRequired(!value);
        break;
      case 'email':
        setEmail(value);
        setEmailValid(validateEmail(value));
        setEmailRequired(!value);
        break;
      case 'inquiry':
        setInquiry(value);
        break;
      case 'message':
        setMessage(value);
        setMessageRequired(!value);
        break;
      default:
        break;
    }
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
    setPhoneRequired(!value);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !phone || !message) {
      setFieldsCompleted(false);
      return;
    } else if (!emailValid) {
      return;
    }
    setSubmitted(true);
    handleSubmitFormspree(event);
    document.querySelector('#success-modal').classList.add('is-active');

  };

  const handleCancel = () => {
    window.history.back();
  };

  const { t } = useTranslation();


  return (
    <>
      {submitted && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="roboto bg-white rounded-lg shadow-lg p-2 text-center relative">
            <button
              onClick={() => {
                setSubmitted(false);
                window.location.href = '/';
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{t("message1")}</h2>
            <p className="text-gray-700 mb-4">{t("message2")} Mayor Security, LCC - {t("message3")}</p>
            <p className="text-gray-500">✨ {t("message4")} ✨</p>
          </div>
        </div>
      )}

      <div className="flex justify-center items-center ml-4 mr-4 mb-4">
        <form onSubmit={handleSubmit} className="p-5 md:w-3/4 w-full  bg-gray-100 rounded-lg">
          <h2 className="lora600 text-2xl font-extrabold ml-4 my-3 tracking-normal">{t("getInTouch")}</h2>
          <p className="roboto text-black mb-2 ml-4">{t("questions")}</p>
          {/* <h2 className="text-xl font-bold tracking-normal ml-4 mt-4 md:mt-8 mb-5 md:mb-5">Drop us a line</h2> */}
          {!fieldsCompleted && <p className="text-red-500 text-xs mt-2">{t("fill")}</p>}

          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className="mx-4">
              <label className="lora400 block text-gray-700 text-sm font-bold my-2">{t("name")}</label>
              <input
                name="firstName"
                value={firstName}
                className="lora400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                required
                placeholder="John"
                onChange={handleChange}
              />
              {nameRequired && <p className="text-red-500 text-xs mt-2">{t("nameValid")}</p>}
            </div>

            <div className="mx-4">
              <label className="lora400 block text-gray-700 text-sm font-bold my-2">{t("lastName")}</label>
              <input
                name="lastName"
                value={lastName}
                className="lora400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                required
                placeholder="Doe"
                onChange={handleChange}
              />
              {nameRequired && <p className="text-red-500 text-xs mt-2">{t("lastNameValid")}</p>}
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
            <div className="mb-2 mx-4">
              <label className="lora400 block text-gray-700 text-sm font-bold my-2">{t("email")}</label>
              <input
                name="email"
                value={email}
                className="lora400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                required
                placeholder="john.doe@example.com"
                onChange={handleChange}
              />
              {emailRequired && <p className="text-red-500 text-xs mt-2">{t("emailValid")}</p>}
              {!emailValid && email && <p className="text-red-500 text-xs mt-2">{t("emailValid2")}</p>}
            </div>

            <div className="mb-2 ml-4 mr-4">
              <label className="lora400 block text-gray-700 text-sm font-bold my-2">{t("phone")}</label>
              <PhoneInput
                name="phone"
                value={phone}
                placeholder="(123) 456-7890"
                type="tel"
                className='lora400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                onChange={handlePhoneChange}
                defaultCountry="US" />
              {phoneRequired && <p className="text-red-500 text-xs mt-2">{t("phoneValid")}</p>}
              {/* <input
            name="phone"
            value={phone}
            className={`shadow appearance-none border ${!emailValid ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            type="email"
            placeholder="email@example.com"
            onChange={handleChange}
          /> */}
            </div>

          </div>

          <div className="mb-4 mx-4">
            <label className="lora400 block text-gray-700 text-sm font-bold my-2">{t("interest")}</label>
            <div className="relative">
              <select
                name="inquiry"
                value={inquiry}
                onChange={handleChange}
                className="lora400 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled>{t("option1")}</option>
                <option value="General Inquiry">{t("option2")}</option>
                <option value="Security Services">{t("option3")}</option>
                <option value="Corporate Security Solutions">{t("option4")}</option>
                <option value="Corporate Security Solutions">{t("option5")}</option>
                <option value="Home Security Systems">{t("option6")}</option>
                <option value="Event Security Services">{t("option7")}</option>
                <option value="Security Consultations">{t("option8")}</option>
                {/* <option value="Careers">Careers</option> */}
                {/* <option value="Feedback">Feedback</option> */}
                <option value="Other">{t("option9")}</option></select>
            </div>
          </div>

          <div className="mb-6 ml-4 mr-4">
            <label className="lora400 block text-gray-700 text-sm font-bold mb-2">{t("message")}</label>
            <textarea
              name="message"
              className="lora400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder={t("msg")}
              value={message}
              onChange={handleChange}
              rows={5}
            ></textarea>
            {messageRequired && <p className="text-red-500 text-xs mt-2">{t("messageValid")}</p>}
          </div>

          <div className="lora600 flex items-center justify-center space-x-2">
            <button type="submit" disabled={state.submitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              {t("submit")}
            </button>
            <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleCancel}>
              {t("cancel")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
