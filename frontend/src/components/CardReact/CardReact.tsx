import React from 'react'
import logo from '../../img/heart.svg'
import {Card} from '../../types/card.type'
const CardReact = ({id,category, url, title, description, likes, urlWiki}: Card) => {
    return (
        <>
            <article className="project-maincontainer-section-card " id={id.toString()}>
                <div className="project-maincontainer-section-card-image">
                    <img className="project-maincontainer-section-card-image" src={url} alt="CardImage"/>
                </div>
                <div className="project-maincontainer-section-card-ui">
                    <div className="project-maincontainer-section-card-ui-header">
                        <h2>{title}</h2>
                        <div className="project-maincontainer-section-card-ui-header-likes">
                            <img className="project-maincontainer-section-card-ui-header-likes-heart"
                                 src={logo.src}
                                 alt="heart"/>
                            <h3>{likes}</h3>
                        </div>
                    </div>
                    <div className="project-maincontainer-section-card-ui-text">
                        <div className="project-maincontainer-section-card-ui-text-description">
                            <p>{description}</p>
                        </div>
                        <div className="project-maincontainer-section-card-ui-text-button">
                            <a href={urlWiki}>
                                <h3>Read more {">>"}</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
export default CardReact