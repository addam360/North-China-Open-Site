import React, { Component } from 'react';

import './App.css';
import './typography.css';
import './Sections.css';

import Footer from './Footer';
import TranslationSection from './TranslationSection';
import BCPSection from './BCPSection';

import missionsPDF from './missions.pdf';

class EventDetails extends Component {

  render() {

    return (
      <div>

<div className="CNEN"><p>CN/EN: 用<a href="https://cn.northchinaopen.com">中文</a>看这个页面 </p></div>      
      
        <a href="/" className="NCOLogo"> </a>

        <div className="SectionWrapper MetalBG">

          <div className="PageHeader">
            <h1>EVENT DETAILS</h1>
            <h2>Everything you need to know about the NCO</h2>
            <p>For full details on the tournament format, translation support, itinerary, prizes, and venue, read on.</p>
          </div>      

        </div>


          <div className="SectionWrapper">
            <div className="SectionCopy">
              <h1>EVENT FORMAT</h1>
              <h2>A.K.A. THE RULES</h2>
              <p>The North China Open is an ITC sanctioned Warhammer 40K Tournament held on the weekend of the 18th - 19th of May in Tianjin, China.</p>
              <p>The event will consist of five rounds held over two days, using Frontline Gaming's <a href="https://docs.google.com/document/d/1bUs0HrJ3f6YzR6mWlT1LRLq0i9_0ekf7ah9WhCTxsIo/edit?usp=sharing">ITC Rules</a> and ITC <a href="https://docs.google.com/document/d/18u16xnoStYHxTUL0Eodjk3kTR4MCn9zyF1r3sZkOgfo/edit">Simplified Missions</a>. Players will have up to 3 hours to complete a single mission.</p>
              <p>We willl be using the Matched Play Recommendations from the Warhammer 40,000 8th Edition ruleset, which can be found in the main <a href="https://www.games-workshop.com/en-US/Warhammer-40000-rulebook-eng-2017">Rulebook</a>.</p>
              <p><strong>ITC standard games will be played at 2000 points.</strong></p>
              <p>Full army composition rules can be found <a href="/army">here</a>.</p>
              <br />
              <p><strong>Download the full ITC rules pack for this event <a href={missionsPDF} download>here</a>.</strong></p>
            </div>
            
            <div className="SectionCopy">
              <h1>ITINERARY</h1>
            </div>
            <div className="SectionSpare">
              <h1>Saturday</h1>
              <p><strong>8:00-8:30</strong> Player's Briefing</p>
              <p><strong>8:30-11:30</strong> Round 1</p>
              <p><strong>11:30-12:15</strong> Lunch (Complementary)</p>
              <p><strong>12:15-3:15</strong> Round 2</p>
              <p><strong>3:30-6:30</strong> Round 3</p>
            </div>
            <div className="SectionSpare">
              <h1>Sunday</h1>
              <p><strong>8:30-11:30</strong> Round 4</p>
              <p><strong>11:30-12:15</strong> Lunch (Complementary)</p>
              <p><strong>12:15-3:15</strong> Final Round</p>
              <p><strong>3:15-4:00</strong> Wrap up and Prizes</p>
            </div>

          </div>

          <TranslationSection />

          <div className="SectionWrapper">
            <div className="SectionCopy">
              <h1>VENUE</h1>
              <h2>The Field of Battle</h2>
              <p>The Event will be held at TEDA International School in TianJin's Binhai District.</p>
              <p>The quickest way to the venue from Beijing or Shanghai is to take the C2581 Bullet Train to Binhai station. Be careful though, because not every bullet train to Tianjin stops here. If you find yourself in TianJin South Railway Station due to availability, you can grab a taxi or take the subway to TEDA in Binhai.</p>
              <p>There will no doubt be players meeting up on route, so join the National Tournaments WeChat group via the QR Code to make travel arrangements and get to know your fellow attendees.</p>
              <p>We have tentatively set the player cap for this venue at <strong>40 players</strong>, so register now on the BCP Player App to avoid disappointment.</p>
            </div>
          </div>

          <BCPSection />

          <div className="SectionWrapper">
            <div className="SectionCopy">
              <h1>PRIZE SUPPORT</h1>
              <h2>SPONSORS</h2>
              <p>Yes, there will be prizes!</p>
              <p>Prize support for the main tournament is yet to be finalised, though several hobby companies and local gaming stores have already decided to chip in. There will be prizes available for those who rank in the tournament as well as hobby prizes for the Best Painted Army and best Sportsmanship.</p>
              <p>Competition is already fierce for the coveted Wooden Spoon - awarded to the player with the lowest overall score at the end of Round Five.</p>
              <p>In addition, a raffle has been proposed to support everyone who signed-up and made the event possible. Now, obviously not everyone will get a prize, but you all at least have a chance.</p>
              <p><strong>Register today on the BCP Player App and follow all the rules when building and painting your army to be eligible for Prize Support.</strong></p>
            </div>
          </div>          

        <Footer />

      </div>
    );
  }
}

export default EventDetails;
