import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {NavigationPane} from '@rocket/mv-rcl'
import React, {useState} from 'react';
import Dashboard from './assets/images/icons/Dashboard.svg';
import Performance from './assets/images/icons/Performance.svg';
import Groups from './assets/images/icons/Groups.svg';
import Instances from './assets/images/icons/Instances.svg';
import Thresholds from './assets/images/icons/Thresholds.svg';
import Admin from './assets/images/icons/Admin.svg';
import Devops from './assets/images/icons/Devops.svg';

const sideNavMenuData = [
  {
    label: 'Dashboard Analytics',
    icon: <Dashboard />,
    to: '/',
    onClick: () => {
      console.log('Dashboard');
    },
  },
  {
    label: 'Performance',
    icon: <Performance />,
    to: '/performance',
    onClick: () => {
      console.log('Performance');
    },
    items: [
      {
        label: 'Events',
        to: '/performance/events',
        onClick: () => {
          console.log('events');
        },
      },
      { 
        label: 'CPU and Memory', 
        to: '/performance/cpuandmemory' 
      },
      {
        label: 'Locks',
        to: '/performance/locks',
        onClick: () => {
          console.log('locks');
        },
      },
      {
        label: 'MV Sessions',
        to: '/performance/mvsessions',
        onClick: () => {
          console.log('mvsessions');
        },
      },
      {
        label: 'Connection Pooling',
        to: '/performance/connectionpooling',
        onClick: () => {
          console.log('connection pooling');
        },
      },
    ],
  },
  { label: 'Groups', icon: <Groups />, to: '/groups', onClick: () => {} },
  {
    label: 'Instances',
    icon: <Instances />,
    to: '/instances',
    onClick: () => {
      console.log('Groups');
    },
  },
  { label: 'Thresholds', to: '/Thresholds', icon: <Thresholds />, onClick: () => {} },
  { label: 'Administration', to: '/Administration', icon: <Admin />, onClick: () => {} },
  { label: 'DevOps', to: '/devops', icon: <Devops />, onClick: () => {} },
];

const navigationRoutes = [
  { route: '/', component: <h1>Dashboard</h1> },
  { route: '/performance', component: <h1>Performance</h1> },
  { route: '/groups', component: <h1>Groups</h1> },
  { route: '/performance/events', component: <h1>Events</h1> },
  { route: '/performance/locks', component: <h1>Locks</h1> },
  { route: '/performance/sessions', component: <h1>MV Sessions</h1> },
  { route: '/performance/cpu', component: <h1>CPU and Memory</h1> },
  { route: '/instances', component: <h1>Instances</h1> },
  { route: '/thresholds', component: <h1>Thresholds</h1> },
  { route: '/Administration', component: <h1>Admin</h1> },
  { route: '/devops', component: <h1>Devops</h1> },
];


function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSubmenuIndex, setActiveSubmenuIndex] = useState(null);
  return (
    <BrowserRouter>
    <div className="layout-wrapper">
      <NavigationPane navigationItems={sideNavMenuData} activeIndex={activeIndex} 
      setActiveIndex={setActiveIndex} activeSubmenuIndex={activeSubmenuIndex} setActiveSubmenuIndex={setActiveSubmenuIndex}/>
      <div className="layout-main">
         <div>
          <Routes>
            {navigationRoutes.map((item) => (
              <Route path={item.route} key={item.route} element={item.component} />
            ))}
          </Routes>
        </div> 
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
