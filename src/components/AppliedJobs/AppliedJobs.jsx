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
            <h2 className=" text-center text-3xl font-bold" >Applied Jobs: {appliedJobs.length} </h2>
            <details class="dropdown flex justify-end">
                <summary class="btn m-1">Filter By <PiGreaterThan></PiGreaterThan> </summary>
                <ul tabIndex={0} className="dropdown-content menu  bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
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
