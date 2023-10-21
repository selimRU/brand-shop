import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
    const {id, name, image } = brand;

    return (
        <div className=' shadow-md p-5 rounded-md space-y-4'>
            <Link to={`/brandProducts/${name}`}>
                <img className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-100 rounded-md' src={image} alt="" />
                <h3 className='text-center text-xl font-semibold'>{name}</h3>
            </Link>
        </div>
    );
};

export default BrandCard;