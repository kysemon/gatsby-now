import React from 'react'
import {useStaticQuery, graphql } from "gatsby"
import big from '../../images/hehe.jpg'
import { StaticImage } from "gatsby-plugin-image"


const Dayone = ({data}) => {
    console.log("ss",data)
    return (
        <div>
            <h1>he</h1>
            <StaticImage 
            src="https://cdn.shopify.com/s/files/1/0098/6044/8292/files/web-cover-510_1788x.jpg?v=1620572285"
            placeholder="blurred"
            layout="fixed"
            width={1000}
            aspectRatio={2/9}
            
            />
            
        </div>
    )
}




export default Dayone
