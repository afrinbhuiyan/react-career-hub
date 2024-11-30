
import './Job.css'
const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location,
        job_type, salary, job_description, job_responsibility, 
     } = job;
    return (
        <div className="bg-base-100 border rounded-lg shadow-xl">
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
                <div className="card-actions">
                    <button className="btn font-bold text-white bg-gradient-to-r from-sky-500 to-[#9245f7b9]">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;