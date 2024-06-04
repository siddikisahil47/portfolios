import React from 'react'
import { profile } from '../assetsfile/Image'
import "./about.css"

const About = () => {
    return (
        <div className='about'>
            <div className='aboutSection'>
                {/* image + detail about me */}
                <div className='aboutImageSection'>
                    <img src={profile} alt="profile"  className='aboutImage'/>
                </div>
                <div>
                    <div>
                        <h1>AI Experiences with passion</h1>
                    </div>
                    <div>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam esse dolores dolor ab adipisci ullam quisquam hic laudantium amet enim provident, alias, ut dolorum aspernatur recusandae. Nulla dolores perferendis illum deserunt corporis architecto cum nam repellat voluptatem animi voluptate consequatur ullam, numquam laudantium eaque. Nihil mollitia numquam odio quos placeat!
                        </p>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sequi nesciunt, ducimus voluptatum tempore corrupti culpa ullam, sunt nemo dolorem nulla debitis nobis? Sed, in!
                        </span>
                        </div>
                    <div className='aboutButton'>
                        <button>let's talk</button>
                        <button>Resume</button>
                    </div>
                </div>
            </div>
            <div>Skills</div>
            <div>Achivement</div>
            <div>Projects</div>
        </div>
    )
}

export default About