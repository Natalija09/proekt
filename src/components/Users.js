import React from 'react'
import { connect } from 'react-redux'
import { fetchUsersRequest } from '../actions/UsersActions'
import { Link } from 'react-router-dom'

class Users extends React.Component {
    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        return (
            <div class="row container">

                {this.props.users.map(user => {
                    return (

                        <ul className=" pink lighten-4" style={{ textAlign: "center", fontFamily: "sans-serif", color: "#9575cd " }} key={user.id}>
                            <br />
                            <li>Name: {user.name}</li>
                            <li>Username: {user.username}</li>
                            <li>Email: {user.email}</li>
                            <li>Website: {user.website}</li>
                            <li>Telephone number: {user.phone}</li>
                            <li><Link style={{ color: "#558b2f" }} to={`/user/${user.id}`}>Learn more about this User</Link></li>
                            <br />

                        </ul>

                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.UsersReducer.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
            dispatch(fetchUsersRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)