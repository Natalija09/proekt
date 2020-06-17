import React from 'react'
import axios from 'axios'

export class Post extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            post: undefined
        }
    }
    componentDidMount() {
        this.getBody()
    }
    getBody = () => {
        axios({
            url: `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`,
            method: 'GET'
        })
            .then(res => {
                this.setState({
                    post: res.data
                })
            })
            .catch(err => {
                alert(err)
            })
    }
    render() {
        return (
            <div>
                {
                    this.state.post !== undefined &&
                    <div>
                        <div class="row container">
                            <div class="col s12 center-align ">
                                <div class="card-panel light-green accent-1">
                                    <h3 style={{ fontStyle: "italic", color: "#00796b", fontFamily: "sans-serif" }}>Body:</h3>
                                    <p style={{ color: "#00796b", fontFamily: "sans-serif" }}>{this.state.post.body}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                }

            </div>
        )
    }
}