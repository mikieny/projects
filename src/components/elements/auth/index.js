import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import { useState } from 'react';

function Authwindow({ openModals }) {
    const [formData, setFormData] = useState({
        login: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const authenticateUser = () => {
        // Получаем данные из localStorage
        const storedData = JSON.parse(localStorage.getItem('userData'));
        const storedLogin = storedData?.login;
        const storedPassword = storedData?.password;
        

        // Проверяем совпадение введенных данных с данными из localStorage
        if (formData.login === storedLogin && formData.password === storedPassword) {
            return true; // Аутентификация успешна
        } else {
            return false; // Ошибка аутентификации
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.login || !formData.password) {
            setErrors({
                login: formData.login ? '' : 'Введите логин',
                password: formData.password ? '' : 'Введите пароль',
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

        if (authenticateUser()) {
            navigate('/products');
        } else {
            setErrors({
                login: 'Неправильный логин или пароль',
                password: 'Неправильный логин или пароль',
            });
        }
    };

    return (
        <div className="auth">
            <Link to="" onClick={openModals} className="regwindow__btn">
                Зарегистрироваться
            </Link>
            <div className="auth__title">Вход</div>
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
                <button type="submit" className="auth__btn">
                    Войти
                </button>
            </form>
        </div>
    );
}

export default Authwindow;