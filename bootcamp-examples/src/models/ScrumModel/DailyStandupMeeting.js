import React from 'react';
import ParticipantsRoleInMeeting from './ParticipantsRoleInMeeting'
import AfterMeeting from './AfterMeeting'
function ProductBacklog() {
  return (
      <div>
          <h5>
            Daily Standup Meeting
          </h5>
            <ol>
                <li>
                    Once the Sprint has started, the Scrum Team engages in
                    another of the key Scrum practices: The Daily Stand-Up
                    Meeting. 
                </li><br/>
                <li>
                    This is a short (15 minute) meeting that happens every
                    workday at an appointed time, and everyone on the Scrum
                    Team attends; in order to ensure it stays brief, everyone stands
                    (hence “Stand-Up Meeting”).
                </li><br/>
                <li>
                    It’s the team’s opportunity to report to itself on progress and obstacles.
                </li><br/>
                <li>
                    One by one, each member of the team reports just three things
                    to the other members of the team:
                    <ol><br/>
                        <li>What they were able to get done since the last meeting.</li>
                        <li>What they’re aiming to get done by the next meeting.</li>
                        <li>Any blocks or obstacles that are in their way.</li>
                    </ol><br/>
                    There’s no discussion during the Daily Stand-Up Meeting, just
                    the reporting of the three key pieces of information; if
                    discussion is required, it takes place right after the meeting
                </li>
            </ol>
            <dd>
                <ParticipantsRoleInMeeting/>
                <AfterMeeting/>
            </dd>
      </div>
  );
}

export default ProductBacklog;