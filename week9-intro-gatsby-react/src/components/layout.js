import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"

export default function Layout({children}) {
    const data = useStaticQuery(graphql`
        query LayoutQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <>
            <header id="globalHeader">
                <h1>{data.site.siteMetadata.title} &hearts;</h1>
                <div className="flex">
                    <p>
                    <Link to="/">Home</Link> | <Link to="/animal-grid">Animal Grid</Link>
                    </p>
                    <p>
                    <em>Page last updated: <time dateTime="2020-05-29">29 May 2020</time></em>
                    </p>
                </div>
            </header>
            <main>
                {children}
            </main>
            <footer>
                &copy; 2020 Rainier McCheddarton
            </footer>
        </>
    )
}