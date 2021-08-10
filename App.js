import React, {Component} from "react"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("https://www.breakingbadapi.com/api/characters")
            .then(Response => Response.json)
            .then(json => {
                this.setState({
                    loading: true,
                    items: json,
                })

            });
    }

    render() {
        var {loading, items} = this.state;

        if (!loading) {
            return <div>Loading...</div>
        }

        else {
            return (
                <div className="App ">
                        <ul>
                            {items.map(item => (
                                <li key={item.id}>
                                    <img src={item.img}/>
                                    <br/>
                                    Name: {item.name}
                                    <br/>
                                    BirthDate: {item.birthday}
                                    <br/>
                                    Occupation: {item.occupation}
                                    <br/>
                                    Status: {item.status}
                                    <br/>
                                    Nickname: {item.nickname}
                                    <br/>
                                    Actor Playing the Role: {item.potrayed}
                                    <br/>
                                    Appearance: {item.appearance}
                                    <br/>
                                    <hr/>
                                </li>
                            ))};

                        </ul>
                </div>
            );
        }

    }
}

export default App
