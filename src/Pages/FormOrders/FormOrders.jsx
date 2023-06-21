import React, { useEffect, useState } from 'react';
import s from './FormOrders.module.css';
import Rectangle from '../../assets/Rectangle 16.svg';
import { useTranslation } from 'react-i18next';

const FormOrders = () => {
    const [formvalue, setFormvalue] = useState({ name: '', email: '', message: '' });
    const [formerror, setFormerror] = useState({});
    const [issubmit, setSubmit] = useState(false);
    const [textMessage, setTextMessage] = useState(false);

    const handlevalidation = (e) => {
        const { name, value } = e.target;
        setFormvalue({ ...formvalue, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormerror(validationform(formvalue));
        setSubmit(true);
    };

    const validationform = (value) => {
        const errors = {};
        if (!value.name) {
            errors.name = t('enter-name');
        }
        if (!value.email) {
            errors.email = t('required');
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)) {
            errors.email = t('invalid');
        }
        if (!value.message) {
            errors.message = t('enter-message');
        }
        return errors;
    };

    const { t } = useTranslation();

    useEffect(() => {
        if (Object.keys(formerror).length === 0 && issubmit) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formvalue),
            };
            fetch('http://13.53.133.130/email/email/api/', requestOptions)
                .then((response) => response.json())
                .catch((error) => console.error(error));
            setTextMessage(true);
        }
    }, [formerror, formvalue, issubmit]);

    return (
        <>
            <p className={s.write_us}>{t('order')}</p>
            <form onSubmit={handleSubmit} className={s.form}>
                <input
                    type="text"
                    className={s.name}
                    name="name"
                    value={formvalue.name}
                    onChange={handlevalidation}
                    placeholder={t('name')}
                />
                <span className={s.message_error}>{formerror.name}</span>
                <input
                    type="text"
                    className={s.email}
                    name="email"
                    value={formvalue.email}
                    onChange={handlevalidation}
                    placeholder={t('email')}
                />
                <span className={s.message_error}>{formerror.email}</span>

                <textarea
                    className={s.message}
                    name="message"
                    value={formvalue.message}
                    onChange={handlevalidation}
                    placeholder={t('message')}
                />

                <span className={s.message_error}>{formerror.message}</span>

                <button className={s.send} type="submit" name="button">
                    {t('send')}
                </button>

                {textMessage && <p>{t('thanks')}</p>}
            </form>
            <img src={Rectangle} alt="" className={s.rectan} />
        </>
    );
};

export default FormOrders;
