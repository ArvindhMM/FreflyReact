import './index.css'


const Header = () => {
    return (
        <div className="headerContainer">
            <div className="logoContainer">
                <img src="https://res.cloudinary.com/dhs1xv9et/image/upload/v1719065473/Frame_h7xkwy.svg" alt="Firefly Logo" className="logo" />
            </div>
            <div className="titleContainer">
                <h1>The choice is yours.<br />Because they don’t have one.</h1>
                <a href="#products" className="headerQuickView">Quick View</a>
            </div>
        </div>
    );
};

export default Header;
  