import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';


const App = () => {
    const [open, setOpen] = useState(true);
    return (
        <>
            <div className={`${open ? "w-72" : "w-20"} h-screen relative bg-gray-200 duration-300`}>
                <i className={`fa-solid fa-arrow-left absolute bg-white cursor-pointer rounded-full -right-3 top-9 w-7 h-7 text-center py-1 border-2 border-purple-800 duration-300 ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)}></i>

                <div className='flex pb-8'>
                    <h1 className={`text-black py-4 px-4 font-bold text-2xl ${!open && 'scale-0'}`}>Logo</h1>
                </div>

                <hr/>

                <div className='py-2'>
                    <Link
                        href={route('dashboard')}
                        className="font-semibold px-4 text-sm text-gray-800 hover:text-purple-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                    <i class="fa-solid fa-house"></i> 
                    <span className={`${!open && 'hidden'} origin-left duration-200`}> Home</span>
                    </Link>
                </div>
                
                <div className='py-2'>
                    <Link
                        href={route('dashboard.employee')}
                        className="font-semibold px-4 text-sm text-gray-800 hover:text-purple-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        <i class="fa-solid fa-users"></i>
                        <span className={`${!open && 'hidden'} origin-left duration-200`}> Employees</span>
                    </Link>
                </div>

                <div className='py-2'>
                    <Link
                        href={route('dashboard.employee')}
                        className="font-semibold px-4 text-sm text-gray-800 hover:text-purple-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        <i class="fa-solid fa-list-check"></i>
                        <span className={`${!open && 'hidden'} origin-left duration-200`}> Task</span>
                    </Link>
                </div>

                <div className='py-2'>
                    <Link
                        href={route('dashboard.employee')}
                        className="font-semibold px-4 text-sm text-gray-800 hover:text-purple-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        <i class="fa-solid fa-comments"></i>
                        <span className={`${!open && 'hidden'} origin-left duration-200`}> Messages</span>
                    </Link>
                </div>

                <div className='py-2'>
                    <Link
                        href={route('dashboard.employee')}
                        className="font-semibold px-4 text-sm text-gray-800 hover:text-purple-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        <i class="fa-solid fa-cash-register"></i>
                        <span className={`${!open && 'hidden'} origin-left duration-200`}> Payroll</span>
                    </Link>
                </div>

                <div className='py-2'>
                    <Link
                        href={route('dashboard.employee')}
                        className="font-semibold px-4 text-sm text-gray-800 hover:text-purple-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        <i class="fa-solid fa-scale-balanced"></i>
                        <span className={`${!open && 'hidden'} origin-left duration-200`}> Case Management</span>
                    </Link>
                </div>

                <div className='py-2'>
                    <Link
                        href={route('dashboard.employee')}
                        className="font-semibold px-4 text-sm text-gray-800 hover:text-purple-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        <i class="fa-brands fa-elementor"></i>
                        <span className={`${!open && 'hidden'} origin-left duration-200`}> Time & Attendance</span>
                    </Link>
                </div>

                <div className='py-2'>
                    <Link
                        href={route('dashboard.employee')}
                        className="font-semibold px-4 text-sm text-gray-800 hover:text-purple-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        <i class="fa-solid fa-certificate"></i>
                        <span className={`${!open && 'hidden'} origin-left duration-200`}> Performance</span>
                    </Link>
                </div>

                <div className='py-2'>
                    <Link
                        href={route('dashboard.employee')}
                        className="font-semibold px-4 text-sm text-gray-800 hover:text-purple-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        <i class="fa-solid fa-calendar-day"></i>
                        <span className={`${!open && 'hidden'} origin-left duration-200`}> Events</span>
                    </Link>
                </div>

                <div className='py-2'>
                    <Link
                        href={route('dashboard.employee')}
                        className="font-semibold px-4 text-sm text-gray-800 hover:text-purple-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        <i class="fa-solid fa-user-plus"></i>
                        <span className={`${!open && 'hidden'} origin-left duration-200`}> Recruitment</span>
                    </Link>
                </div>


            </div>
        </>
    )
};

export default App;