import React from 'react';
import OverViewTab from './OverViewTab';
import About from './About';

function Tabs() {
    return (
        <>
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
