import SidebarLayout from '@/Layouts/SidebarLayout';
import AllEmployees from '@/Components/AllEmployees';
import { Head } from '@inertiajs/react';

export default function Dashboarddemo(props) {
    return (
        <>
            <Head title="Dashboard" />

            <div className="flex">
                <SidebarLayout/>
                <div className={`w-full relative duration-300`}>

                    <div className='flex px-6 justify-between w-full'>
                        <div>
                            <h1 className={`text-black py-4 px-4 font-bold text-3xl`}>Employees</h1>  
                        </div>
                        
                        
                        <div className="flex justify-center py-4">
                            <div className="mb-3 xl:w-96">
                                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                                    <input
                                        type="search"
                                        className="relative m-0 block w-[1%] bg-gray-300 min-w-0 flex-auto rounded-md border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
                                        placeholder="Search"
                                        aria-label="Search"
                                        aria-describedby="button-addon2" />
                                    <span
                                        className="input-group-text flex items-center -right-1 absolute whitespace-nowrap rounded px-3 py-2 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                                        id="basic-addon2">
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="rgb(64 64 64)"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                            clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='py-4'>
                            <button
                                type="button"
                                className="inline-block rounded-lg bg-blue-600 px-6 pt-2.5 pb-2 text-xs font-bold leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-800 ">
                                <i className="fa-solid fa-plus"></i> Add Employee
                            </button>
                        </div>

                    </div>

                    <div className='w-full px-4'>
                        <ul
                            className="mb-5 flex list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row"
                            role="tablist"
                            data-te-nav-ref>
                            <li role="presentation">
                                <a
                                href="#tabs-home"
                                className="my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-sm font-extrabold leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-blue-500 data-[te-nav-active]:text-blue-500"
                                data-te-toggle="pill"
                                data-te-target="#tabs-home"
                                data-te-nav-active
                                role="tab"
                                aria-controls="tabs-home"
                                aria-selected="true"
                                >All Employees
                                </a>
                            </li>
                            <li role="presentation">
                                <a
                                href="#tabs-profile"
                                className="focus:border-transparent my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-sm font-extrabold leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-blue-500 data-[te-nav-active]:text-blue-500"
                                data-te-toggle="pill"
                                data-te-target="#tabs-profile"
                                role="tab"
                                aria-controls="tabs-profile"
                                aria-selected="false"
                                >Active
                                </a>
                            </li>
                            <li role="presentation">
                                <a
                                href="#tabs-messages"
                                className="my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-sm font-extrabold leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-blue-500 data-[te-nav-active]:text-blue-500"
                                data-te-toggle="pill"
                                data-te-target="#tabs-messages"
                                role="tab"
                                aria-controls="tabs-messages"
                                aria-selected="false"
                                >Leave
                                </a>
                            </li>
                            <li role="presentation">
                                <a
                                href="#tabs-messages"
                                className="my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-sm font-extrabold leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-blue-500 data-[te-nav-active]:text-blue-500"
                                data-te-toggle="pill"
                                data-te-target="#tabs-messages"
                                role="tab"
                                aria-controls="tabs-messages"
                                aria-selected="false"
                                >Suspended
                                </a>
                            </li>
                            <li role="presentation">
                                <a
                                href="#tabs-messages"
                                className="my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-sm font-extrabold leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-blue-500 data-[te-nav-active]:text-blue-500"
                                data-te-toggle="pill"
                                data-te-target="#tabs-messages"
                                role="tab"
                                aria-controls="tabs-messages"
                                aria-selected="false"
                                >Terminated
                                </a>
                            </li>
                        </ul>
                        <div className="mb-6 w-full">
                            <div
                                className="hidden w-full opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                                id="tabs-home"
                                role="tabpanel"
                                aria-labelledby="tabs-home-tab"
                                data-te-tab-active>
                                <AllEmployees />
                            </div>
                            <div
                                className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                                id="tabs-profile"
                                role="tabpanel"
                                aria-labelledby="tabs-profile-tab">
                                Tab 2 content
                            </div>
                            <div
                                className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                                id="tabs-messages"
                                role="tabpanel"
                                aria-labelledby="tabs-profile-tab">
                                Tab 3 content
                            </div>
                            <div
                                className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                                id="tabs-contact"
                                role="tabpanel"
                                aria-labelledby="tabs-contact-tab">
                                Tab 4 content
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}
