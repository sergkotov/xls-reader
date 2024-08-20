import { Link } from "react-router-dom";

const Page404 = () => {
   return (
        <div className="p404">
            <p className="p404__text">Страница не найдена</p>
            <Link to="/">На главную страницу</Link>
        </div>
   )
}

export default Page404;