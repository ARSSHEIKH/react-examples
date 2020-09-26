import React, {useState} from 'react';
import StartingNextSprintMore from './StartingNextSprintMore'

function StartingNextSprint() {
    let [readLess, readMore] = useState(
        <div>
            <ul>
                <li>
                    Following the Sprint Review Meeting, the Product Owner
                    takes all the input, as well as all new priorities that have
                    appeared during the Sprint, and incorporates them into the
                    Product Backlog; new items are added, and existing ones are
                    modified, reordered, or deleted.
                </li><br/>
                <li>
                    Once this updating of the Product Backlog is complete, the
                    cycle is ready to begin all over again, with the next Sprint
                    Planning Meeting.
                </li><br/>
                <li>
                    One practice many teams find useful is to hold a Prioritization
                    Meeting toward the end of each Sprint, to review the Product
                    Backlog for the upcoming Sprint with the Product Owner.
                </li>
                <li>
                    <a className="ancLink" onClick={() => 
                        document.getElementById('ancReadMore').textContent = readMore(
               
                        <div>
                        <StartingNextSprintMore/>
                        </div>
                        )}>Read More
                    </a>
                </li>
            </ul>
        </div>
    );
  return (
      <div>
          <h5>
            Starting the Next Sprint
          </h5>
            {readLess}
            
      </div>
  );
}

export default StartingNextSprint;