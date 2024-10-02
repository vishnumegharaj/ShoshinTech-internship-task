import Header from '../components/header/header.js';
import Mainmenu from '../components/mainmenu/mainmenu.js';
import './dashboard.css';

import { useState } from 'react';

function Dashboard() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <div className="dashboard-container">
            <Mainmenu isMenuVisible={isMenuVisible} />
            <div className="main-content">
                <Header toggleMenu={toggleMenu} isMenuVisible={isMenuVisible} />
                <main className="dashboard-content">
                    <h1 className="dashboard-title">Dashboard</h1>

                    <div className="dashboard-row row">

                        <div className='row-1'>

                            <div className="stats-grid">
                                <div className="stat-card" style={{ background: '#FFEFE7' }}>
                                    <h2 className="stat-title">Available Position</h2>
                                    <p className="stat-value">24</p>
                                    <p className="stat-subtext" style={{ color: '#FF5151' }}>4 Urgently needed</p>
                                </div>
                                <div className="stat-card" style={{ background: '#E8F0FB' }}>
                                    <h2 className="stat-title">Job Open</h2>
                                    <p className="stat-value">10</p>
                                    <p className="stat-subtext" style={{ color: '#3786F1' }}>4 Active hiring</p>
                                </div>
                                <div className="stat-card" style={{ background: '#FFEFE7' }}>
                                    <h2 className="stat-title">New Employees</h2>
                                    <p className="stat-value">24</p>
                                    <p className="stat-subtext" style={{ color: '#EE61CF' }}>4 Department</p>
                                </div>
                            </div>

                            <div className="dashboard-row">
                                <div className="chart-card">
                                    <h2 className="chart-title">Total Employees</h2>
                                    <div className="chart-content">
                                        <div>
                                            <p className="chart-value">216</p>
                                            <div className="chart-details">
                                                <p>120 Men</p>
                                                <p>96 Women</p>
                                            </div>
                                        </div>

                                        <div>

                                            <svg width="117" height="79" viewBox="0 0 117 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 51.5C1 51.5 16.2821 33.2086 30 30.5C40.431 28.4403 46.4876 35.5924 57 34C73.2778 31.5342 76.3958 13.9209 92.5 10.5C101.477 8.59307 115.5 10.5 115.5 10.5" stroke="#FF5151" stroke-width="2" stroke-linecap="round" />
                                                <path d="M30.5 30.3475C16.7821 33.0562 1.5 51.3475 1.5 51.3475V78.5H116V10.3475C116 10.3475 101.977 8.4406 93 10.3475C76.8958 13.7685 73.7778 31.3817 57.5 33.8475C46.9875 35.4399 40.931 28.2878 30.5 30.3475Z" fill="url(#paint0_linear_5430_37)" />
                                                <path d="M46.28 9.17C46.2133 9.17 46.1567 9.14667 46.11 9.1C46.0633 9.05333 46.04 8.99667 46.04 8.93V6.98H44.12C44.0533 6.98 43.9967 6.95667 43.95 6.91C43.9033 6.86333 43.88 6.80667 43.88 6.74V6.21C43.88 6.13667 43.9033 6.08 43.95 6.04C43.9967 5.99333 44.0533 5.97 44.12 5.97H46.04V4.07C46.04 4.00333 46.0633 3.94667 46.11 3.9C46.1567 3.85333 46.2133 3.83 46.28 3.83H46.86C46.9333 3.83 46.99 3.85333 47.03 3.9C47.0767 3.94667 47.1 4.00333 47.1 4.07V5.97H49.02C49.0867 5.97 49.1433 5.99333 49.19 6.04C49.2367 6.08 49.26 6.13667 49.26 6.21V6.74C49.26 6.80667 49.2367 6.86333 49.19 6.91C49.1433 6.95667 49.0867 6.98 49.02 6.98H47.1V8.93C47.1 8.99667 47.0767 9.05333 47.03 9.1C46.99 9.14667 46.9333 9.17 46.86 9.17H46.28ZM50.108 9.5C50.0413 9.5 49.9846 9.47667 49.938 9.43C49.8913 9.38333 49.868 9.32667 49.868 9.26V8.75C49.868 8.69 49.8813 8.62 49.908 8.54C49.9413 8.45333 50.0113 8.36667 50.118 8.28L51.698 6.71C52.138 6.36333 52.4913 6.07 52.758 5.83C53.0313 5.58333 53.228 5.36 53.348 5.16C53.4746 4.95333 53.538 4.75 53.538 4.55C53.538 4.25 53.4546 4.00667 53.288 3.82C53.128 3.63333 52.8713 3.54 52.518 3.54C52.2846 3.54 52.088 3.59 51.928 3.69C51.768 3.78333 51.6413 3.91 51.548 4.07C51.4613 4.23 51.4013 4.40667 51.368 4.6C51.3546 4.68667 51.318 4.74667 51.258 4.78C51.198 4.81333 51.138 4.83 51.078 4.83H50.188C50.128 4.83 50.078 4.81 50.038 4.77C49.998 4.73 49.978 4.68333 49.978 4.63C49.9846 4.34333 50.0446 4.06667 50.158 3.8C50.2713 3.52667 50.4346 3.28667 50.648 3.08C50.868 2.86667 51.1346 2.69667 51.448 2.57C51.7613 2.44333 52.1146 2.38 52.508 2.38C53.0613 2.38 53.518 2.47333 53.878 2.66C54.2446 2.84667 54.518 3.1 54.698 3.42C54.8846 3.74 54.978 4.1 54.978 4.5C54.978 4.81333 54.918 5.10333 54.798 5.37C54.678 5.63 54.5046 5.88333 54.278 6.13C54.0513 6.37 53.778 6.61667 53.458 6.87L52.038 8.31H54.888C54.9613 8.31 55.018 8.33333 55.058 8.38C55.1046 8.42 55.128 8.47667 55.128 8.55V9.26C55.128 9.32667 55.1046 9.38333 55.058 9.43C55.018 9.47667 54.9613 9.5 54.888 9.5H50.108ZM56.7094 9.5C56.5694 9.5 56.4994 9.43333 56.4994 9.3C56.4994 9.26 56.5127 9.22333 56.5394 9.19L61.4694 2.69C61.516 2.63 61.5627 2.58333 61.6094 2.55C61.656 2.51667 61.7227 2.5 61.8094 2.5H62.3394C62.4794 2.5 62.5494 2.56667 62.5494 2.7C62.5494 2.74 62.536 2.77667 62.5094 2.81L57.5794 9.31C57.5327 9.37 57.486 9.41667 57.4394 9.45C57.3994 9.48333 57.3327 9.5 57.2394 9.5H56.7094ZM61.5194 9.56C61.0727 9.56 60.7194 9.43667 60.4594 9.19C60.1994 8.94333 60.056 8.62 60.0294 8.22C60.0227 8.04667 60.0194 7.89667 60.0194 7.77C60.0194 7.64333 60.0227 7.48667 60.0294 7.3C60.056 6.9 60.1927 6.57667 60.4394 6.33C60.6927 6.08333 61.0527 5.96 61.5194 5.96C61.9927 5.96 62.3527 6.08333 62.5994 6.33C62.8527 6.57667 62.9894 6.9 63.0094 7.3C63.0227 7.48667 63.0294 7.64333 63.0294 7.77C63.0294 7.89667 63.0227 8.04667 63.0094 8.22C62.9894 8.62 62.846 8.94333 62.5794 9.19C62.3194 9.43667 61.966 9.56 61.5194 9.56ZM61.5194 8.78C61.666 8.78 61.7794 8.75 61.8594 8.69C61.946 8.63 62.0094 8.55333 62.0494 8.46C62.0894 8.36667 62.1094 8.27333 62.1094 8.18C62.1227 8.01333 62.1294 7.87333 62.1294 7.76C62.1294 7.64 62.1227 7.50333 62.1094 7.35C62.1027 7.19667 62.056 7.05667 61.9694 6.93C61.8827 6.79667 61.7327 6.73 61.5194 6.73C61.3127 6.73 61.166 6.79667 61.0794 6.93C60.9927 7.05667 60.9427 7.19667 60.9294 7.35C60.9227 7.50333 60.9194 7.64 60.9194 7.76C60.9194 7.87333 60.9227 8.01333 60.9294 8.18C60.9427 8.27333 60.966 8.36667 60.9994 8.46C61.0394 8.55333 61.0994 8.63 61.1794 8.69C61.266 8.75 61.3794 8.78 61.5194 8.78ZM57.5294 6.02C57.0827 6.02 56.7294 5.90333 56.4694 5.67C56.2094 5.43667 56.066 5.12 56.0394 4.72C56.0327 4.54667 56.0294 4.39667 56.0294 4.27C56.0294 4.13667 56.0327 3.97667 56.0394 3.79C56.066 3.39 56.2027 3.06667 56.4494 2.82C56.7027 2.57333 57.0627 2.45 57.5294 2.45C58.0027 2.45 58.3627 2.57333 58.6094 2.82C58.8627 3.06667 58.9994 3.39 59.0194 3.79C59.0327 3.97667 59.0394 4.13667 59.0394 4.27C59.0394 4.39667 59.0327 4.54667 59.0194 4.72C58.9994 5.12 58.856 5.43667 58.5894 5.67C58.3294 5.90333 57.976 6.02 57.5294 6.02ZM57.5294 5.28C57.676 5.28 57.7894 5.25 57.8694 5.19C57.956 5.13 58.0194 5.05333 58.0594 4.96C58.0994 4.86667 58.1194 4.77 58.1194 4.67C58.1327 4.50333 58.1394 4.36333 58.1394 4.25C58.1394 4.13 58.1327 3.99333 58.1194 3.84C58.1127 3.68667 58.066 3.54667 57.9794 3.42C57.8927 3.29333 57.7427 3.23 57.5294 3.23C57.3227 3.23 57.176 3.29333 57.0894 3.42C57.0027 3.54667 56.956 3.68667 56.9494 3.84C56.9427 3.99333 56.9394 4.13 56.9394 4.25C56.9394 4.36333 56.9427 4.50333 56.9494 4.67C56.956 4.77 56.976 4.86667 57.0094 4.96C57.0494 5.05333 57.1094 5.13 57.1894 5.19C57.276 5.25 57.3894 5.28 57.5294 5.28Z" fill="#FF5151" />
                                                <path d="M52.5 17.5L54.5 15.5M54.5 15.5L56.5 17.5M54.5 15.5V22.5" stroke="#FF5151" stroke-linecap="round" stroke-linejoin="round" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_5430_37" x1="59" y1="-15.5" x2="81" y2="44" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#FF5151" />
                                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>


                                            <p className="chart-subtext">+2% Past month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="chart-card">
                                    <h2 className="chart-title">Talent Request</h2>
                                    <div className="chart-content">
                                        <div>
                                            <p className="chart-value">16</p>
                                            <div className="chart-details">
                                                <p>6 Men</p>
                                                <p>10 Women</p>
                                            </div>
                                        </div>

                                        <div>



                                            <svg width="117" height="79" viewBox="0 0 117 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 51.5C1 51.5 16.2821 33.2086 30 30.5C40.431 28.4403 46.4876 35.5924 57 34C73.2778 31.5342 76.3958 13.9209 92.5 10.5C101.477 8.59307 115.5 10.5 115.5 10.5" stroke="#FF5151" stroke-width="2" stroke-linecap="round" />
                                                <path d="M30.5 30.3475C16.7821 33.0562 1.5 51.3475 1.5 51.3475V78.5H116V10.3475C116 10.3475 101.977 8.4406 93 10.3475C76.8958 13.7685 73.7778 31.3817 57.5 33.8475C46.9875 35.4399 40.931 28.2878 30.5 30.3475Z" fill="url(#paint0_linear_5430_37)" />
                                                <path d="M46.28 9.17C46.2133 9.17 46.1567 9.14667 46.11 9.1C46.0633 9.05333 46.04 8.99667 46.04 8.93V6.98H44.12C44.0533 6.98 43.9967 6.95667 43.95 6.91C43.9033 6.86333 43.88 6.80667 43.88 6.74V6.21C43.88 6.13667 43.9033 6.08 43.95 6.04C43.9967 5.99333 44.0533 5.97 44.12 5.97H46.04V4.07C46.04 4.00333 46.0633 3.94667 46.11 3.9C46.1567 3.85333 46.2133 3.83 46.28 3.83H46.86C46.9333 3.83 46.99 3.85333 47.03 3.9C47.0767 3.94667 47.1 4.00333 47.1 4.07V5.97H49.02C49.0867 5.97 49.1433 5.99333 49.19 6.04C49.2367 6.08 49.26 6.13667 49.26 6.21V6.74C49.26 6.80667 49.2367 6.86333 49.19 6.91C49.1433 6.95667 49.0867 6.98 49.02 6.98H47.1V8.93C47.1 8.99667 47.0767 9.05333 47.03 9.1C46.99 9.14667 46.9333 9.17 46.86 9.17H46.28ZM50.108 9.5C50.0413 9.5 49.9846 9.47667 49.938 9.43C49.8913 9.38333 49.868 9.32667 49.868 9.26V8.75C49.868 8.69 49.8813 8.62 49.908 8.54C49.9413 8.45333 50.0113 8.36667 50.118 8.28L51.698 6.71C52.138 6.36333 52.4913 6.07 52.758 5.83C53.0313 5.58333 53.228 5.36 53.348 5.16C53.4746 4.95333 53.538 4.75 53.538 4.55C53.538 4.25 53.4546 4.00667 53.288 3.82C53.128 3.63333 52.8713 3.54 52.518 3.54C52.2846 3.54 52.088 3.59 51.928 3.69C51.768 3.78333 51.6413 3.91 51.548 4.07C51.4613 4.23 51.4013 4.40667 51.368 4.6C51.3546 4.68667 51.318 4.74667 51.258 4.78C51.198 4.81333 51.138 4.83 51.078 4.83H50.188C50.128 4.83 50.078 4.81 50.038 4.77C49.998 4.73 49.978 4.68333 49.978 4.63C49.9846 4.34333 50.0446 4.06667 50.158 3.8C50.2713 3.52667 50.4346 3.28667 50.648 3.08C50.868 2.86667 51.1346 2.69667 51.448 2.57C51.7613 2.44333 52.1146 2.38 52.508 2.38C53.0613 2.38 53.518 2.47333 53.878 2.66C54.2446 2.84667 54.518 3.1 54.698 3.42C54.8846 3.74 54.978 4.1 54.978 4.5C54.978 4.81333 54.918 5.10333 54.798 5.37C54.678 5.63 54.5046 5.88333 54.278 6.13C54.0513 6.37 53.778 6.61667 53.458 6.87L52.038 8.31H54.888C54.9613 8.31 55.018 8.33333 55.058 8.38C55.1046 8.42 55.128 8.47667 55.128 8.55V9.26C55.128 9.32667 55.1046 9.38333 55.058 9.43C55.018 9.47667 54.9613 9.5 54.888 9.5H50.108ZM56.7094 9.5C56.5694 9.5 56.4994 9.43333 56.4994 9.3C56.4994 9.26 56.5127 9.22333 56.5394 9.19L61.4694 2.69C61.516 2.63 61.5627 2.58333 61.6094 2.55C61.656 2.51667 61.7227 2.5 61.8094 2.5H62.3394C62.4794 2.5 62.5494 2.56667 62.5494 2.7C62.5494 2.74 62.536 2.77667 62.5094 2.81L57.5794 9.31C57.5327 9.37 57.486 9.41667 57.4394 9.45C57.3994 9.48333 57.3327 9.5 57.2394 9.5H56.7094ZM61.5194 9.56C61.0727 9.56 60.7194 9.43667 60.4594 9.19C60.1994 8.94333 60.056 8.62 60.0294 8.22C60.0227 8.04667 60.0194 7.89667 60.0194 7.77C60.0194 7.64333 60.0227 7.48667 60.0294 7.3C60.056 6.9 60.1927 6.57667 60.4394 6.33C60.6927 6.08333 61.0527 5.96 61.5194 5.96C61.9927 5.96 62.3527 6.08333 62.5994 6.33C62.8527 6.57667 62.9894 6.9 63.0094 7.3C63.0227 7.48667 63.0294 7.64333 63.0294 7.77C63.0294 7.89667 63.0227 8.04667 63.0094 8.22C62.9894 8.62 62.846 8.94333 62.5794 9.19C62.3194 9.43667 61.966 9.56 61.5194 9.56ZM61.5194 8.78C61.666 8.78 61.7794 8.75 61.8594 8.69C61.946 8.63 62.0094 8.55333 62.0494 8.46C62.0894 8.36667 62.1094 8.27333 62.1094 8.18C62.1227 8.01333 62.1294 7.87333 62.1294 7.76C62.1294 7.64 62.1227 7.50333 62.1094 7.35C62.1027 7.19667 62.056 7.05667 61.9694 6.93C61.8827 6.79667 61.7327 6.73 61.5194 6.73C61.3127 6.73 61.166 6.79667 61.0794 6.93C60.9927 7.05667 60.9427 7.19667 60.9294 7.35C60.9227 7.50333 60.9194 7.64 60.9194 7.76C60.9194 7.87333 60.9227 8.01333 60.9294 8.18C60.9427 8.27333 60.966 8.36667 60.9994 8.46C61.0394 8.55333 61.0994 8.63 61.1794 8.69C61.266 8.75 61.3794 8.78 61.5194 8.78ZM57.5294 6.02C57.0827 6.02 56.7294 5.90333 56.4694 5.67C56.2094 5.43667 56.066 5.12 56.0394 4.72C56.0327 4.54667 56.0294 4.39667 56.0294 4.27C56.0294 4.13667 56.0327 3.97667 56.0394 3.79C56.066 3.39 56.2027 3.06667 56.4494 2.82C56.7027 2.57333 57.0627 2.45 57.5294 2.45C58.0027 2.45 58.3627 2.57333 58.6094 2.82C58.8627 3.06667 58.9994 3.39 59.0194 3.79C59.0327 3.97667 59.0394 4.13667 59.0394 4.27C59.0394 4.39667 59.0327 4.54667 59.0194 4.72C58.9994 5.12 58.856 5.43667 58.5894 5.67C58.3294 5.90333 57.976 6.02 57.5294 6.02ZM57.5294 5.28C57.676 5.28 57.7894 5.25 57.8694 5.19C57.956 5.13 58.0194 5.05333 58.0594 4.96C58.0994 4.86667 58.1194 4.77 58.1194 4.67C58.1327 4.50333 58.1394 4.36333 58.1394 4.25C58.1394 4.13 58.1327 3.99333 58.1194 3.84C58.1127 3.68667 58.066 3.54667 57.9794 3.42C57.8927 3.29333 57.7427 3.23 57.5294 3.23C57.3227 3.23 57.176 3.29333 57.0894 3.42C57.0027 3.54667 56.956 3.68667 56.9494 3.84C56.9427 3.99333 56.9394 4.13 56.9394 4.25C56.9394 4.36333 56.9427 4.50333 56.9494 4.67C56.956 4.77 56.976 4.86667 57.0094 4.96C57.0494 5.05333 57.1094 5.13 57.1894 5.19C57.276 5.25 57.3894 5.28 57.5294 5.28Z" fill="#FF5151" />
                                                <path d="M52.5 17.5L54.5 15.5M54.5 15.5L56.5 17.5M54.5 15.5V22.5" stroke="#FF5151" stroke-linecap="round" stroke-linejoin="round" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_5430_37" x1="59" y1="-15.5" x2="81" y2="44" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#FF5151" />
                                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>

                                            <p className="chart-subtext">+5% Past month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div >
                                <div className="announcement-card">
                                    <div className="card-header">
                                        <h2 className="card-title">Announcement</h2>
                                        <select className="date-select">
                                            <option>Today, 13 Sep 2021</option>
                                        </select>
                                    </div>
                                    <ul className="announcement-list">
                                        <li className="announcement-item">
                                            <div className="announcement-content">
                                                <h3>Outing schedule for every department</h3>
                                                <p>5 Minutes ago</p>
                                            </div>
                                            <div className="announcement-actions">
                                                <button className="action-button"><i className="icon-star"></i></button>
                                                <button className="action-button"><i className="icon-more"></i></button>
                                            </div>
                                        </li>
                                        <li className="announcement-item">
                                            <div className="announcement-content">
                                                <h3>Meeting HR Department</h3>
                                                <p>Yesterday, 12:30 PM</p>
                                            </div>
                                            <div className="announcement-actions">
                                                <button className="action-button"><i className="icon-star"></i></button>
                                                <button className="action-button"><i className="icon-more"></i></button>
                                            </div>
                                        </li>
                                        <li className="announcement-item">
                                            <div className="announcement-content">
                                                <h3>IT Department need two more talents for UX/UI Designer position</h3>
                                                <p>Yesterday, 09:15 AM</p>
                                            </div>
                                            <div className="announcement-actions">
                                                <button className="action-button"><i className="icon-star"></i></button>
                                                <button className="action-button"><i className="icon-more"></i></button>
                                            </div>
                                        </li>
                                    </ul>
                                    <button className="see-all-button">See All Announcement</button>
                                </div>

                            </div>

                        </div>

                        <div className='row-2'>
                            <div className="activity-card">
                                <h2 className="card-title title" >Recently Activity</h2>
                                <div className="activity-content">
                                    <p className="activity-time">10:40 AM, Fri 10 Sept 2021</p>
                                    <h3 className="activity-title">You Posted a New Job</h3>
                                    <p className="activity-description">Kindly check the requirements and terms of work and make sure everything is right.</p>
                                    <p className="activity-summary">Today you makes 12 Activity</p>
                                    <button className="see-all-button">See All Activity</button>
                                </div>
                            </div>
                            <div className="schedule-card">
                                <div className="card-header">
                                    <h2 className="card-title">Upcoming Schedule</h2>
                                    <select className="date-select">
                                        <option>Today, 13 Sep 2021</option>
                                    </select>
                                </div>
                                <ul className="schedule-list">
                                    <li className="schedule-item priority">
                                        <div className="schedule-content">
                                            <h3>Review candidate applications</h3>
                                            <p>Today - 11:30 AM</p>
                                        </div>
                                        <button className="action-button"><i className="icon-more"></i></button>
                                    </li>
                                    <li className="schedule-item">
                                        <div className="schedule-content">
                                            <h3>Interview with candidates</h3>
                                            <p>Today - 10:30 AM</p>
                                        </div>
                                        <button className="action-button"><i className="icon-more"></i></button>
                                    </li>
                                    <li className="schedule-item">
                                        <div className="schedule-content">
                                            <h3>Short meeting with product designer from IT Department</h3>
                                            <p>Today - 09:15 AM</p>
                                        </div>
                                        <button className="action-button"><i className="icon-more"></i></button>
                                    </li>
                                </ul>
                                <button className="create-button">Create a New Schedule</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

    );
}

export default Dashboard;
