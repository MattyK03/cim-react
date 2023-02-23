import React from 'react'

import { projects } from './ProjectsState'
import "./Projects.css"
import PageNums from '../utils/PageNums'

const Projects = () => {
  return (
    <section className="section section-grey">
        <div className="container--large">
            <div className="projects">
                <div className="section__title light-title">Проекты</div>
                
                <div className="projects__group">
                    {projects.map((project, index) => {
                        return (
                            <div className="projects__item card__item">
                                <img src={project.img} alt="" className="card__img" />
                                <div className="project__name">{project.name}</div>
                                <div className="project__date">{project.date}</div>
                                <img src={project.arrow} alt="" className="projects__arrow" />
                            </div>
                    )})}
                </div>

                <div className="projects__pageNums">
                    <PageNums />
                </div> 
            </div>
        </div>
    </section>
  )
}

export default Projects