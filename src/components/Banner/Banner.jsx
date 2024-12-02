import './Banner.css'

const Banner = () => {
    return (
        <div className='flex justify-between mt-20'>
            {/* <h2 className="text-center text-5xl roboto-bold">Home page Banner</h2> */}
            <div className='flex flex-col justify-center'>
                <h1 className='text-7xl roboto-bold ' >One Step <br /> Closer To Your <br />
                    <span className=' text-[#633deeab] ' >Dream Job</span></h1>
                <p className='text-[#11111193] mt-4' >Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='btn w-36 text-white mt-5 hover:bg-[#8231ec] hover:shadow-2xl 
                bg-gradient-to-r from-sky-500 to-[#9245f7b9]' >Get Started</button>
            </div>
            <div>
                <img src="https://i.ibb.co.com/WDBbKP4/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;