import React, { Component } from 'react'
import "./Dashboard.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { Sidepanel } from '../../components/side-panel/index';
import { Header } from '../../components/header/index';
import { PieChart } from "../../components/chart/index";

export class Dashboard extends Component {
    render() {
        return (
            <>
                <div class="dashboard">
                    <div class="shape2">
                        <svg preserveAspectRatio="none" viewBox="0 0 374 901" class="ellipse2"><path d="M 187 0 C 290.2772521972656 0 374 201.6957397460938 374 450.5 C 374 699.3042602539063 290.2772521972656 901 187 901 C 83.72275543212891 901 0 699.3042602539063 0 450.5 C 0 201.6957397460938 83.72275543212891 0 187 0 Z"  /></svg>
                        <svg preserveAspectRatio="none" viewBox="0 0 18 17" class="ellipse3"><path d="M 9 0 C 13.97056198120117 0 18 3.805579662322998 18 8.5 C 18 13.19441986083984 13.97056198120117 17 9 17 C 4.02943754196167 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 4.02943754196167 0 9 0 Z"  /></svg>
                    </div>
                    <svg preserveAspectRatio="none" viewBox="0 0 1100 654" class="shape1"><path d="M 550 0 C 853.756591796875 0 1100 146.4028930664063 1100 327 C 1100 507.5971069335938 853.756591796875 654 550 654 C 246.243408203125 654 0 507.5971069335938 0 327 C 0 146.4028930664063 246.243408203125 0 550 0 Z"  /></svg>
                    <div class="dashboardContainer">  
                        <div class="rectangle1"></div>

                        <Sidepanel />
                        <Header />
                        <Calendar />
                        <PieChart />
                    </div>
                </div>
                    
            </>
        );
    }
}
