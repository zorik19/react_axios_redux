import React from "react";
import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
            <span className="font-bold text-blue-50">Мое приложение</span>

            <span>
                <Link to="/" className="font-bold mr-8">Главная</Link>
                <Link to="/favorite" className="font-bold mr-8">Избранные репозитории</Link>
                <Link to="/product" className="font-bold mr-8">Онлайн магазин</Link>
                <Link to="/about" className="font-bold mr-8">Информация</Link>
                <Link to="/main-port" className="font-bold mr-8">Воздух</Link>
                <Link to="/airport/:id" className="font-bold mr-8">Аэропорт</Link>
                <Link to="/auth" className="font-bold">Авторизация</Link>
            </span>
        </nav>
    )
}