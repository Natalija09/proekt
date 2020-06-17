import React from 'react'
import { connect } from 'react-redux'
import { fetchPostsRequest } from './../actions/PostsActions'
import { Link } from 'react-router-dom'

class Posts extends React.Component {
    componentDidMount() {
        this.props.getPosts()

    }
    render() {
        return (
            <div>
                {this.props.posts.slice(0, 11).map(post => {
                    return (
                        <div class="row container">
                            <div class="col s12  center-align">
                                <div
                                    class="card-panel pink lighten-4 "
                                    style={{ textAlign: "center", color: "#9575cd ", fontFamily: "sans-serif" }}>
                                    <ul key={post.id}>
                                        <li>
                                            <p style={{ fontWeight: "bold" }}>Title:</p>
                                            {post.title}</li>
                                        <br />
                                        <li><Link style={{ color: "#558b2f" }} to={`/post/${post.id}`}>Read More</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    )
                })

                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.PostsReducer.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => {
            dispatch(fetchPostsRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts)