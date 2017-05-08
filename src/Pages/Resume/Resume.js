import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <div id="contact_info">
            <div id="basic_info">
                <div id="name">Zachary S. Newton</div>
                <div id="permanent_address">3734 Edmund Blvd, Minneapolis, MN</div>
                <div id="current_address">Martin Hall Coov-Lace, 131 Beyer Ct., 2155, Ames, IA</div>
            </div>
            <div id="basic_contact">
                <div id="phone">(612)275-9524</div>
                <div id="email">znewton@iastate.edu</div>
                <div id="GitHub">znewton</div>
                <div id="LinkedIn">Zach Newton</div>
                <div id="portfolio"><a href="http://znewton.github.io/portfolio">znewton.github.io/portfolio</a></div>
            </div>
        </div>

        <div id="objective">
            <div className="section_header">Objective</div>
            <div className="section_content">Obtain a Software Engineering Internship for Summer 2017</div>
        </div>

        <div id="education">
            <div className="section_header">Education</div>
            <div className="section_content">
                <div id="high_school">
                    Minnehaha Academy, Minneapolis, MN <span style={{color: '#777'}}>(August 2011 - May 2015)</span><br/>
                    High School Diploma <br/>
                    GPA: 3.96/4.00
                </div>
                <div id="university">
                    <strong>Iowa State University</strong> | Ames, IA | <span style={{color: '#666'}}>(August 2015 - May 2019)</span> <br/>
                    BS in Software Engineering <br/>
                    GPA: 3.50/4.00
                </div>
            </div>
        </div>

        <div id="skills">
            <div className="section_header">Skills</div>
            <div className="section_content">
                <div id="languages">
                    <div className="list_header">Languages</div>
                    <ul>
                        <li>Java</li>
                        <li>PHP</li>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                    </ul>
                </div>
                <div id="frameworks">
                    <div className="list_header">Frameworks</div>
                    <ul>
                        <li>AngularJS</li>
                        <li>Zend</li>
                        <li>Bootstrap</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <div id="software">
                    <div className="list_header">Software</div>
                    <ul>
                        <li>Blender 3D</li>
                        <li>Adobe Photoshop</li>
                        <li>MS Office</li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="experience">
            <div className="section_header">Experience</div>
            <div className="section_content">
                <div id="WebDev">
                    <div className="company_name">Iowa State University</div>
                    <div className="position">Web Developer</div>
                    <div className="time_period">November 2015 - Present</div>
                    <ul>
                        <li>Developed web based application solutions for clients</li>
                        <li>Collaborated with coworkers on multifaceted projects for various clientele</li>
                        <li>Increased User Experience of university websites by integrating asynchronous web development techniques</li>
                    </ul>
                </div>
                <div id="ISS">
                    <div className="company_name">Minnehaha Academy</div>
                    <div className="position">International Space Station Project</div>
                    <div className="time_period">August 2014-June 2015</div>
                    <ul>
                        <li>Converted specs from the mechanical team into a 3d printable bacterial film enclosure chamber</li>
                        <li>Sent a micro lab experiment to the ISS to study the effects of artificial shark skin on the growth of bio films in microgravity</li>
                        <li>Cooperated between four teams to create a functional, unique experiment in six months</li>
                    </ul>
                </div>
                <div id="APComS">
                    <div className="company_name">Minnehaha Academy</div>
                    <div className="position">AP Computer Science Teaching Assist.</div>
                    <div className="time_period">August-December 2014</div>
                    <ul>
                        <li>Assisted students with in-class work and problem-solving in Java</li>
                        <li>Eased the learning curve of an environment that was more individual problem solving than teacher instruction</li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="activities">
            <div className="section_header">Activities</div>
            <div className="section_content">
                <div id="activity1">
                    <span className="event_name">HackISU Midwest Hackathon Participant</span>
                    <span className="dates">Fall 2015,2016</span>
                    <ul>
                        <li>Attempted to create a web app for card game Ultimate Werewolf <span className="year">2015</span></li>
                        <li>Created a web app to check songs for FCC profanity violations <span className="year">2016</span></li>
                    </ul>
                </div>
                <div id="activity2">
                    <span className="event_name">ISU Game Development Club</span>
                    <span className="dates">2015-2016</span>
                    <ul>
                        <li>Built a 2D game Engine in Java from scratch <span className="year">2015</span></li>
                    </ul>
                </div>
                <div id="activity3">
                    <span className="event_name">Environmental Education Club</span>
                    <span className="dates">2016</span>
                    <ul>
                        <li>Teach the next generation about the environment and nature in general <span className="year">2015</span></li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="honors">
            <div className="section_header">
                Honors/
                Awards
            </div>
            <div className="section_content">
                <ul>
                    <li>HackISU Googliest Hack Award (<a href="http://www.lyricprof.com">www.lyricprof.com)</a>(Fall 2016)</li>
                    <li>Iowa State University Deans List (Spring 2016)</li>
                    <li>Iowa State Honors Program (2015)</li>
                    <li>Minnehaha Academy Excellence in STEM Award (2015)</li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
}
