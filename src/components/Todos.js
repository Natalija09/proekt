import React from 'react'


export class Todos extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [
                { id: 1, todo: "Walk the dog", done: false },
                { id: 2, todo: "Exercise", done: false },
                { id: 3, todo: "Have breakfast", done: false }
            ],
            newTodo: ""
        }
    }
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    deleteItem = (todo) => {
        this.setState({
            todos: [...this.state.todos.filter(d => d.id !== todo.id)]
        })
    }

    addTodo = (item) => {
        if (item !== "") {
            var objekt = {
                id: this.state.todos.length + 1,
                todo: item,
                done: false,
            }

            this.setState({
                todos: [...this.state.todos, objekt],
                newTodo: ""
            })
        }
        else {
            alert("Empty Field")
        }
    }
    markTodoAsDone = (todo) => {
        this.setState({
            todos: [
                ...this.state.todos.map(row => (row.id === todo.id)
                    ?
                    { id: row.id, todo: row.todo, done: !row.done }
                    :
                    row)
            ]
        })
    }

    render() {
        return (
            <div>
                <div class="row container"
                    style={{ textAlign: "center", color: "#9575cd ", fontWeight: "bold", fontFamily: "sans-serif" }}>
                    <div class="col s12 ">
                        <div class="card-panel pink lighten-4">
                            <ul>
                                {this.state.todos.map((todo, i) => {
                                    return (
                                        <li className={todo.done ? "marked-done" : ""} key={i}>
                                            <span>{todo.todo}</span>
                                            <input
                                                type={"checkbox"}
                                                checked={todo.done}
                                                value={todo.done}
                                                onChange={() => { this.markTodoAsDone(todo) }}
                                            />
                                            <p>
                                                <label>
                                                    <input id="indeterminate-checkbox" type={"checkbox"}
                                                        checked={todo.done}
                                                        value={todo.done}
                                                        onChange={() => { this.markTodoAsDone(todo) }} />
                                                    <span></span>
                                                </label>
                                            </p>
                                            <button
                                                class="waves-effect waves-light btn"
                                                style={{ color: "#00796b", backgroundColor: "#ccff90", fontWeight: "bold" }}
                                                onClick={() => { this.deleteItem(todo) }}>DELETE</button>
                                            <br />
                                            <br />
                                        </li>
                                    )
                                })}
                            </ul>
                            <input
                                type={"text"}
                                placeholder={"Add new to do"}
                                value={this.state.newTodo}
                                name={"newTodo"}
                                onChange={this.changeHandler}
                            />
                            <button
                                type={"button"}
                                onClick={() => { this.addTodo(this.state.newTodo) }}
                                class="btn-floating btn-large waves-effect waves-light red"><i
                                    style={{ backgroundColor: "#ccff90", color: "#00796b", fontWeight: "bold" }}
                                    class="material-icons">Add</i></button>

                        </div>
                    </div>
                </div>

            </div>

        )
    }

}