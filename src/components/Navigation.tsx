import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/form'>フォームサンプル</Link>
                </li>
                <li>
                    <Link to='/counter'>カウンターサンプル</Link>
                </li>
            </ul>

            <Outlet />
        </div>
    );
};

export default Navigation;