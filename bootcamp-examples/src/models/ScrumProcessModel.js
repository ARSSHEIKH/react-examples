import React, {useState} from 'react';
import ScrumMoreContent from './ScrumModel/ScrumMoreContent'
import ProductOwner from './ScrumModel/ProductOwner'
import TeamMembers from './ScrumModel/TeamMembers'
import ScrumMaster from './ScrumModel/ScrumMaster'

function ScrumProcessModel() {
    let [readShort, readMore] = useState(
        <div>
            <h2>
                Scrum Model / Scrum Framework:
            </h2>
            <dd>
                It is use to manage the complex software development and it is
                usually consists on the team of 3 to 9 persons.
                <ul>
                    <li>
                        Scrum uses iteration manner of development.
                    </li>
                    <li>
                        As scrum belongs to agile so it provide frequent deleveries.
                    </li>
                    <li>
                        Some basic point of attraction in scrum are:
                        <ul>
                            <li>
                                It is lightweight framework.
                                <ul>
                                    <li>
                                        It is not like that if you adopt it, so you expend all of your time on it, No it says just adopt me and do continue your work.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                It urge you to work in the form of a team.
                            </li>
                            <li>
                                It is self organizing type of framework
                            </li>
                        </ul>
                    </li>
                </ul>
            </dd>
        </div>
    );
    return (

        <div>
            {readShort}
            <a id="ancReadMore" className="ancLink" onClick={() => 
             document.getElementById('ancReadMore').textContent = readMore(
                <div>
                
                    <ScrumMoreContent/>                   
                                
            </div>
            )}>
                ReadMore
            </a>

        <h3>
                Scrum Roles:
        </h3>
            <dd>
                In Scrum, there are three primary roles:
            <ol>
                    <li>
                        The Product Owner
                </li>
                    <li>
                        Team Members
                </li>
                    <li>
                        The Scrum Master
                </li>
                </ol>
            </dd>
            <dd>
                <ol>
                    <li>
                        <ProductOwner />
                    </li>
                    <li>
                        <TeamMembers />
                    </li>
                    <li>
                        <ScrumMaster />
                    </li>

                </ol>
            </dd>
        </div>
    );
}

export default ScrumProcessModel;