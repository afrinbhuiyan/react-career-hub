
import './Job.css'
import { TfiLocationPin } from "react-icons/tfi";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location,
        job_type, salary, id} = job;
    return (
        <div className="bg-base-100 border rounded-lg shadow-xl flex flex-col">
            <figure className="px-10 pt-10">
                <img
                    width={'150px'}
                    src={logo}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{job_title}</h2>
                <p className='font-semibold text-[#11111175]'> {company_name} </p>
                <div>
                    <button className="button mr-4 text-[#6c45f7b9]"> {remote_or_onsite} </button>
                    <button className='button text-[#6c45f7b9]'> {job_type} </button>
                </div>
                <div className='flex gap-3'>
                    <h3 className='flex items-center font-semibold text-[#111111b9]' ><TfiLocationPin /> {location} </h3>
                    <h3 className='flex items-center font-semibold text-[#111111b9] ' ><PiCurrencyCircleDollar /> {salary} </h3>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`} >
                    <button className="btn font-bold text-white
                    bg-gradient-to-r from-sky-500 to-[#9245f7b9]"
                    >View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;