import React, {useState} from 'react';
import ScrumMasterMore from './ScrumMasterMore'
import ProductBacklog from './ProductBacklog'
import SprintPlanMeeting from './SprintPlanMeeting'
import SpirintBacklog from './SpirintBacklog'
import ScrumChange from './ScrumChange'
import DailyStandupMeeting from './DailyStandupMeeting'
import SprintStatus from './SprintStatus'
import SprintReview from './SprintReview'
import SprintRetrospective from './SprintRetrospective'
import StartingNextSprint from './StartingNextSprint'

function ScrumMaster() {
    let [readMore, setReadMore] = useState(
        <div>
            <h4>
                The Scrum Master:
            </h4>
            <dd>
                <ul>
                    <li>
                        The person who is responsible to facilitate the team.<br/>
                        - Facilitate in every sense <i>(the all facilities that require to complete the whole project, is his responsibility)</i>.<br/>
                        - He is the person who keep the scrum on track <i>(track that have given by scrum framework)</i>.
                    </li><br/>
                    <li>
                        The Scrum Master is tasked with doing whatever is necessary to
                        help the team be successful.
                    </li><br/>
                    <li>
                        Scrum Master ask three questions to the team.
                        <ol>
                            <li>
                                What did you do yesterday?
                            </li>
                            <li>
                                What will you do today?
                            </li>
                            <li>
                                Are there any kind of obstacles in your way?
                            </li>
                        </ol>
                    </li><br/>
                    <li>
                        There is no team leader in the scrum environment, all are equally responsible.
                    </li><br/>
                    <li>
                        Mostly in a team scrum master is a person who have some expertise
                        in the scrum framework to coach the team.
                    </li>
                </ul>
                <br/>
                
            </dd>
        </div>
    )
    return (
        <div>{readMore}
            <a id="ancReadMore" className="ancLink" onClick={() => 
             document.getElementById('ancReadMore').textContent = setReadMore(
               
                <div>
                <h4>
                    The Scrum Master:
                </h4>
                <dd>
                    <ScrumMasterMore/>
                    
                </dd>                
               

            </div>
            )}>
                ReadMore
            </a>
            <dd>
                <ProductBacklog/>
                <SprintPlanMeeting/>
                <SpirintBacklog/>
                <ScrumChange/>
                <DailyStandupMeeting/>
                <SprintStatus/>
                <SprintReview/>
                <SprintRetrospective/>
                <StartingNextSprint/>
            </dd>
        </div>
    )
}

export default ScrumMaster;
