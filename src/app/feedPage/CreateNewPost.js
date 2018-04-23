import React from 'react';
import M from "materialize-css"


class CreateNewPost extends React.Component {

    componentDidMount() {
        var elem = document.querySelector('.fixed-action-btn');
       M.FloatingActionButton.init(elem);
    }

    render() {
        return (
            <div className="fixed-action-btn">
                <a className="btn-floating btn-large pulse amber darken-2">
                    <i className="large material-icons">add</i>
                </a>
                <ul>
                    <li><a className="btn-floating red btn btn modal-trigger" href="#modal1"><i className="material-icons">mode_edit</i></a></li>
                    <li><a className="btn-floating yellow darken-1 btn modal-trigger" href="#modal2"><i className="material-icons">image</i></a></li>
                    <li><a className="btn-floating green btn modal-trigger" href="#modal3"><i className="material-icons">videocam</i></a></li>
                </ul>
            </div>
        )
    }
}

export default CreateNewPost;