import { AiOutlineArrowLeft } from 'react-icons/ai';
import err from '../../assets/404.gif'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Link to='/'>
                <div className='flex justify-center'>
                    <div className=" flex items-center gap-3">
                        <AiOutlineArrowLeft></AiOutlineArrowLeft>
                        <button className=" text-2xl rancho text-[#374151]">Back to home</button>
                    </div>
                </div>
            </Link>
            <div className=' max-w-6xl mx-auto'>
                <img className=' w-full' src={err} alt="" />
            </div>
        </div>
    );
};

export default Error;