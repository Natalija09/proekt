import React from 'react'
import axios from 'axios'

export class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: undefined
        }
    }
    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        axios({
            url: `https://jsonplaceholder.typicode.com/users/${this.props.match.params.userId}`,
            method: 'GET'
        })
            .then(res => {
                this.setState({
                    user: res.data
                })
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return (
            <div>

                {this.state.user !== undefined &&
                    <div class="row container"
                        style={{ color: "#00796b" }}>
                        <div class="col s12 center-align">

                            <div class="card horizontal"
                                style={{ backgroundColor: "#ccff90", fontFamily: "sans-serif" }}>

                                <div class="card-stacked">
                                    <div class="card-content">
                                        <h3 style={{ fontStyle: "italic" }}>Address</h3>
                                        <li>Street: {this.state.user.address.street}</li>
                                        <li>City: {this.state.user.address.city}</li>
                                        <li>Zipcode: {this.state.user.address.zipcode}</li>


                                    </div>
                                    <div class="card-action">
                                        <h3 style={{ fontStyle: "italic", }}>Company</h3>
                                        <li>Company: {this.state.user.company.name} </li>
                                        <li>Business: {this.state.user.company.bs}</li>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                }
            </div>
        )
    }
}
