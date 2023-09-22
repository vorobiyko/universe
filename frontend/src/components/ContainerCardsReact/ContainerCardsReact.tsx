import React, {useEffect, useState} from 'react'
import CardReact from "../CardReact/CardReact";
const ContainerCardsReact =   ({data}) => {
    const [state, setState] =  useState(data)
    useEffect(()=>{
        setState(data)

    },[])
    return (
        <>
            <section className="project-maincontainer-section">
                { (state!==null)?
                    state.map(el => (
                        <CardReact
                            key = {el.id}
                            id={el.id}
                            category={el.attributes.category}
                            url={el.attributes.url}
                            title={el.attributes.title}
                            description={el.attributes.description}
                            likes={el.attributes.likes}
                            urlWiki={el.attributes.urlWiki}
                        />
                    )): <h1>Problem with fetch</h1>

                }
            </section>
        </>
    )
}
export default ContainerCardsReact