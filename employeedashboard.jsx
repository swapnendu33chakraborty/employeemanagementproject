import React from 'react'
import Header from '../other/Header.jsx'
import Tasklist from '../other/Tasklist.jsx'
import Octa from '../Task_list/Octa.jsx'

const EmployeeDashboard = () => {
    return(
        
            <div className='p-10 bg-[#1C1C1C]'>
               <Header />
               <Tasklist />
               <Octa />
            </div>
    )
}

export default EmployeeDashboard