import React, { useState } from 'react';
import OverViewTab from './OverViewTab';
import About from './About';

function Tabs() {
    const [activeTab, setActiveTab] = useState('overview');
    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };
    return (
        <>
            {/* <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul className="flex  overflow-auto -mb-px text-sm font-medium text-center" role="tablist">
                    <li className="me-2" role="presentation">
                        <button
                            className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'overview' ? 'border-blue-500 text-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                                }`}
                            onClick={() => handleTabClick('overview')}
                            type="button"
                            role="tab"
                            aria-selected={activeTab === 'overview'}
                        >
                            Overview
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button
                            className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'about' ? 'border-blue-500 text-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                                }`}
                            onClick={() => handleTabClick('about')}
                            type="button"
                            role="tab"
                            aria-selected={activeTab === 'about'}
                        >
                            About
                        </button>
                    </li>
                </ul>
            </div>
            <div className='pb-1'>
                {activeTab === 'overview' && (
                    <div className="p-4 rounded-lg bg-gray-50 shadow-md dark:bg-gray-800" role="tabpanel">
                        <OverViewTab />
                    </div>
                )}
                {activeTab === 'about' && (
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" role="tabpanel">
                        <About />
                    </div>
                )}
            </div> */}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview-tab-pane" type="button" role="tab" aria-controls="overview-tab-pane" aria-selected="true">Overview</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="about-tab" data-bs-toggle="tab" data-bs-target="#about-tab-pane" type="button" role="tab" aria-controls="about-tab-pane" aria-selected="false">About</button>
                </li>
            </ul>
            <div className="tab-content card border-0 rounded shadow p-2" id="myTabContent">
                <div className="tab-pane fade show active" id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab" tabIndex={0}>
                    <OverViewTab />
                </div>
                <div className="tab-pane fade" id="about-tab-pane" role="tabpanel" aria-labelledby="about-tab" tabIndex={0}><About /></div>

            </div>
        </>
    );
}

export default Tabs;
