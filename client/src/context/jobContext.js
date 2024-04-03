import {createContext, useState} from 'react'

export const jobcontext = createContext()

export const JobcontextWrapper = ({children}) => {
    const [jobs, setJobs] = useState()
    return(<jobcontext.Provider value={{jobs, setJobs}}>
        {children}
    </jobcontext.Provider>)
}

export default JobcontextWrapper