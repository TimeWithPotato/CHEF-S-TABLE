import Banner from '../../assets/img/Banner.png';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <>
            <NavBar />
            <div className="relative">
                {/* Text and buttons positioned absolutely */}
                <div className="absolute top-36 left-0 right-0 flex flex-col items-center justify-center text-center text-white p-5">
                    <h1 className="text-4xl font-bold mb-4">Discover an exceptional cooking <br></br> class tailored for you!</h1>
                    <p className="mb-6 ml-40 mr-40">
                    Join our hands-on cooking classes where you will learn to create delicious meals, master essential cooking techniques, and elevate your culinary skills with expert guidance. Perfect for beginners and experienced cooks alike!
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-green-600 text-black px-4 py-2 rounded-2xl hover:bg-green-700 transition text-sm" style={{fontWeight:'600'}}>
                            Explore Now
                        </button>
                        <button className="bg-gray-200 text-black px-4 py-2 rounded-2xl hover:bg-gray-300 transition text-sm" style={{fontWeight:'600'}}>
                            Our Feedback
                        </button>
                    </div>
                </div>
                {/* Banner image */}
                <div className="mt-5">
                    <img className="mx-auto" src={Banner} alt={`This is an image of Banner`} />
                </div>
            </div>
        </>
    );
};

export default Header;
