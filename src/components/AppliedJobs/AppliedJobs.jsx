import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";
import { PiGreaterThan } from "react-icons/pi";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote")
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite")
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {

            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            // console.log(jobs, storedJobIds, jobsApplied)
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs])
    return (
        <div>
            <div className="flex mt-10 mb-20">
                <img src="https://i.ibb.co.com/7CJwbbw/bg1.png" alt="" />
                <h2 className="flex justify-center items-center text-center text-2xl font-bold ml-40" >Applied Jobs: {appliedJobs.length} </h2>
            </div>
            <details class="dropdown flex justify-end">
                <summary class="btn m-1">Filter By <PiGreaterThan></PiGreaterThan> </summary>
                <ul tabIndex={0} className="dropdown-content menu  bg-[#dd8ff01e] rounded-box z-[1] w-52 p-2 shadow-xl">
                    <li onClick={() => handleJobsFilter('all')} ><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')} ><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')} ><a>Onsite</a></li>
                </ul>
            </details>
            <div>
                {
                    displayJobs.map(job => <AppliedJob key={job.id} job={job} ></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;
