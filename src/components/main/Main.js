import React from 'react'
import Chart from '../charts/Chart' 
import "./main.css";
function Main() {
    return (
        <main>
        <div className="main_container">
        <div className="main_title">
<h3>Dashboard</h3>
<div className="main_greeting">
    <h1>Hello developers</h1>
    <p>Welcome to your admin dashboard</p>
</div>
        </div>
        <div className="main_cards">
            <div className="card">
                <i className="fa fa-user-o fa-2x text-lightblue"></i>
            <div className="card_inner">
                <p className="text-primary-p">Number of Subscribers</p>
                <span className="font-bold text-title">578</span>
            </div>
            
            </div>
            <div className="card">
                <i className="fa fa-calendar fa-2x text-red"></i>
                <div className="card_inner">
                    <p className="text-primary-p">
                        Times of Watching
                    </p>
                    <span className="font-bold text-title">2467</span>
                </div>
            </div>
            <div className="card">
                <i className="fa fa-video-camera fa-2x text-yellow"></i>
                <div className="card_inner">
                    <p className="text-primary-p">
                        Number of videos
                    </p>
                    <span className="font-bold text-title">340</span>
                </div>
            </div>
            <div className="card">
                <i className="fa fa-thumbs-up fa-2x text-green"></i>
                <div className="card_inner">
                    <p className="text-primary-p">
                        Number of Likes
                    </p>
                    <span className="font-bold text-title">645</span>
                </div>
            </div>
        </div>
        <div className="charts">
            <div className="charts__left">
                <div className="charts__left__title">
                    <div>
                        <h1>Daily Reports</h1>
                        <p>joker, california,USA</p>
                    </div>
                    <i className="fa fa-usd"></i>
                </div>
                <Chart/>
            </div>
            <div className="charts__right">
                <div className="charts__right__title">
                    <div>
                        <h1>Starts Reports</h1>
                        <p>kion,japan</p>
                    </div>
                    <i className="fa fa-use"></i>
                    
                </div>
 <div className="charts__right__cards">
     <div className="card1">
         <h1>
             Income
         </h1>
         <p>$75,300</p>
     </div>
     <div className="card2">
         <h1>
             Sales
         </h1>
         <p>$124,200</p>
     </div>
     <div className="card3">
         <h1>
             Users
         </h1>
         <p>3900</p>
     </div>
     <div className="card4">
         <h1>
             Orders
         </h1>
         <p>1881</p>
     </div>
 </div>
            </div>
        </div>
        </div>

        </main>
    )
}

export default Main
