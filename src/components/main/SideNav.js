import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Chargers from '../pages/Chargers';  
import Customers from '../pages/Customers';
import Reports from '../pages/Reports';

export default function SideNav() {
  return (
    <React.Fragment>
        <Router>
        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky">
        <ul className="nav flex-column">
            <li className="nav-item">
            <Link to="/dashboard" className="nav-link active" aria-current="page">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                <span className="ml-2">Dashboard</span>
            </Link>
            </li>
        
            <li className="nav-item">
            <Link to="/chargers" className="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx={9} cy={21} r={1} /><circle cx={20} cy={21} r={1} /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                <span className="ml-2">Chargers</span>
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/customers" className="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                <span className="ml-2">Customers</span>
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/reports" className="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart-2"><line x1={18} y1={20} x2={18} y2={10} /><line x1={12} y1={20} x2={12} y2={4} /><line x1={6} y1={20} x2={6} y2={14} /></svg>
                <span className="ml-2">Reports</span>
            </Link>
            </li>

        </ul>
        </div>
        </nav>
            <Routes>
            <Route exactly component={Dashboard} path="/dashboard" />
            <Route exactly component={Chargers} path="/chargers" />
            <Route exactly component={Customers} path="/customers" />
            <Route exactly component={Reports} path="/reports" />
           </Routes>
        </Router>

    </React.Fragment>
  )
}



