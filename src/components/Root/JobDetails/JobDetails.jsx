import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job); 
    return (
        <div>
            <h2>Job Details {id} </h2>
            <div className="grid gap-5 md:grid-cols-4">
                <div className="border md:col-span-3">
                   <p>Job Discription: {job.job_description} </p>
                </div>
                <div className="border">
                   <button className="btn w-full text-white
                    bg-gradient-to-r from-sky-500 to-[#9245f7b9]"
                    >Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;