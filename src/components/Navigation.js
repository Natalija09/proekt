import React from 'react'
import { Link } from 'react-router-dom'

export class Navigation extends React.Component {
    render() {
        return (
            <div style={{ width: "100%", height: "120px", textDecoration: "none" }}>

                <nav>
                    <div class="nav-wrapper">
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li className="col s12 m6 l3"><Link style={{ color: "#7c4dff", fontWeight: "bolder" }} to='/'>Home</Link></li>
                            <li className="col s12 m6 l3"><Link style={{ color: "#7c4dff", fontWeight: "bolder" }} to='/users'>Users</Link></li>
                            <li className="col s12 m6 l3"><Link style={{ color: "#7c4dff", fontWeight: "bolder" }} to='/posts'>Posts</Link></li>
                            <li className="col s12 m6 l3"><Link style={{ color: "#7c4dff", fontWeight: "bolder" }} to='/todos'>Todos</Link></li>
                        </ul>
                    </div>
                </nav>

            </div>









        )
    }
}