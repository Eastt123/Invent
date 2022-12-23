import React from 'react';
import Member from '../../components/member/Member';
import "./Team.css";
import worker from "../../assets/Worker3.png"
import worker1 from "../../assets/Worker2.png"
import worker2 from "../../assets/Worker1.png"
const Team = () => {
    return (
        <section className='team'>
            <div className="team-title">
                <div>
                    <div className='team-line'></div>
                    <h4>Our Team</h4>
                </div>
                <h1>MEET WITH PHLOX TEAM 
                    <br />
                    MEBMBERS</h1>
            </div>
            <div className="team-members">
                <Member image={worker} position="Founder and Thinker" name="Jack Ma" />
                <Member image={worker1} position="Founder and Thinker" name="Jack Ma" />
                <Member image={worker2} position="Founder and Thinker" name="Jack Ma" />
            </div>
        </section>
    );
};

export default Team;