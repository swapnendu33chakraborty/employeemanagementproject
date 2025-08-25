import React from 'react'

const Createtask = () => {
    return (
            <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
                <form className='flex flex-wrap items-start justify-between'>
                    <div className='w-1/2'>
                      <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Enter task title' />
                    </div>
                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                                   
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name' />
                    </div>
                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Candidate U ID</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee ID' />
                    </div>
                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assigned Task</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Enter task' />
                    </div>  
                    </div>
                    <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' names="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-3 rounded text-sm mt-4 w-1/3'>Create Task</button> 
                </form>
            </div>
        
    )
}
export default Createtask