
import { Link } from 'react-router-dom';
import './style.css'
import { useState } from 'react';
function Regwindow({ openModals }) {
    const [formData, setFormData] = useState({
        login: '',
        password: '',
        isSubscribed: false,
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.login === '' || formData.password === '') {
            setErrors({
                login: formData.login === '' ? 'Введите логин' : '',
                password: formData.password === '' ? 'Введите пароль' : '',
            });
            return;
        }
        if (formData.login === formData.password) {
            setErrors({
                login: 'Логин и пароль не должны совпадать',
                password: 'Логин и пароль не должны совпадать',
            });
            return;
        }
        if (formData.login.length < 4 || formData.password.length < 4) {
            setErrors({
                login: 'Логин не должен содержать меньше 4 символов',
                password: 'Пароль не должен содержать меньше 4 символов',
            });
            return;
        }
        localStorage.setItem('userData', JSON.stringify(formData));
    };

    return (
        <div className="auth">
            <Link to="" onClick={openModals} className="regwindow__btn">Авторизоваться</Link>
            <div className="auth__title">Регистрация</div>
            <form className="form-auth container-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="login"
                    value={formData.login}
                    onChange={handleChange}
                    placeholder="Логин"
                    className="auth__login"
                />
                {errors.login && <span className="error">{errors.login}</span>}
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Пароль"
                    className="auth__password"
                />
                {errors.password && <span className="error">{errors.password}</span>}
                <div className="checkbox-auth">
                    <input
                        type="checkbox"
                        className="checkbox"
                        name="isSubscribed"
                        id=""
                    />
                    <label htmlFor="isSubscribed">
                        Я согласен получать обновления на почту
                    </label>
                </div>
                <button type="submit" className="auth__btn">Зарегистрироваться</button>
            </form>
        </div>
    );
}

export default Regwindow;