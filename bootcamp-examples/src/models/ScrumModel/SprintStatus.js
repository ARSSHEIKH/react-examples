import React from 'react';

function SprintStatus() {
  return (
      <div>
          <h5>
            Sprint Status
          </h5>
            <ul>
                <li>
                    One of the core tenets of Scrum is that the duration of the
                    Sprint is never extended – it ends on the assigned date
                    regardless of whether the team has completed the work it
                    committed to or not.
                </li><br/>
                <li>
                    If the team has not completed their Sprint Goal, they have to
                    stand up at the end of the Sprint and acknowledge that they
                    did not meet their commitment. The idea is that this creates a
                    very visible feedback loop, and teams are forced to get better
                    at estimating what they are capable of accomplishing in a
                    given Sprint, and then delivering it without fail
                </li><br/>
                <li>
                    Teams will typically over-commit in their first few Sprints
                    and fail to meet their Sprint Goal; they might then
                    overcompensate and under commit, and finish early; but by
                    the third or fourth Sprint, teams will typically have figured out
                    what they’re capable of delivering, and they’ll meet their
                    Sprint goals reliably after that.
                </li><br/>
                <li>
                    Teams are encouraged to pick one duration for their Sprints
                    (say, 2 weeks) and not change it frequently – a consistent
                    duration helps the team learn how much it can accomplish,
                    and it also helps the team achieve a rhythm for their work (this
                    is often referred to as the “heartbeat” of the team).
                </li>
            </ul>
      </div>
  );
}

export default SprintStatus;