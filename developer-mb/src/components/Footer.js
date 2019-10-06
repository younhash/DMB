import React from 'react'
//import '../App.css'
import './stylesheet.css'

const Footer = (props) => {
    return (
        <div className="footer">
            <h3>DMB</h3>
            <p>Developed by {props.developer} @ {props.year === 2019 ? props.office : props.other}</p>
            <p>Image by <a href="https://pixabay.com/users/dreamypixel-6094827/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2582656">Ales Krivec</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2582656">Pixabay</a></p>
            <h4>{props.year}</h4>
        </div>
    )    
}



export default Footer