import Product from '../Product';
import './index.css';

const MainComponent = () => {
    return (
        <main className="mainContainer">
            <section id="about">
                <div className="headingContainer">
                    <img src='https://res.cloudinary.com/dhs1xv9et/image/upload/v1719076589/Frame_1_kuriuj.png' className="decorativeLineAbout" alt="Decorative Line"/>
                    <h1>About</h1>
                    <img src='https://res.cloudinary.com/dhs1xv9et/image/upload/v1719076589/Frame_1_kuriuj.png' className="decorativeLineAbout" alt="Decorative Line"/>
                </div>
                <div className="aboutDescriptionContainer">
                    <img src='https://res.cloudinary.com/dhs1xv9et/image/upload/v1719076990/Frame_2_x2wwga.png' className="firworkImage" alt="Firework"/>
                    <p className="aboutDescription">
                        Our products are crafted exclusively from the dreams and screams of young kids who wanted to show their mastery in their chosen fields, but were directed towards a factory for daily wages. Each cracker burns brighter than their lost smiles, and can be heard louder than their cries for help. Buy them, burst them, brag about them.<br/>
                        <span className="boldText">The choice is yours. Because they don’t have one.</span>
                    </p>
                    <img src='https://res.cloudinary.com/dhs1xv9et/image/upload/v1719076990/Frame_2_x2wwga.png' className="firworkImage" alt="Firework"/>
                </div>
            </section>
            <section id="products">
                <div className="headingContainer">
                    <img src='https://res.cloudinary.com/dhs1xv9et/image/upload/v1719076589/Frame_1_kuriuj.png' className="decorativeLineAbout" alt="Decorative Line"/>
                    <h1>Our products</h1>
                    <img src='https://res.cloudinary.com/dhs1xv9et/image/upload/v1719076589/Frame_1_kuriuj.png' className="decorativeLineAbout" alt="Decorative Line"/>
                </div>
                <div className="productsContainer">
                    <Product title = 'Raju Rassibomb'/>
                    <Product title = 'Ladiyon ki Rani Chani' />
                </div>
                <img src="https://res.cloudinary.com/dhs1xv9et/image/upload/v1719076612/Frame_kbikbm.png" className="decorativeLine" alt="Decorative Line"/>
            </section> 
        </main>
    );
};

export default MainComponent;
