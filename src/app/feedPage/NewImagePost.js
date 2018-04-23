import React from 'react';
import M from "materialize-css"
import {postService} from "../../services/PostService"

class NewImagePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            success: null,
            error: null
        }

    }

    componentDidMount() {
        const elem = document.querySelector('#modal2');
        M.Modal.init(elem);
    }

    handleInputChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    checkUrl = () => {
        const input = this.state.input
        const ext = input.substring(input.lastIndexOf('.') + 1);
        
        if (ext === "gif" || ext === "GIF" || ext === "JPEG" || ext === "jpeg" || ext === "jpg" || ext === "JPG" || ext === "doc" || ext === "png") {
            this.setState({ success: "Success", error: null })
            // return document.getElementById("labelImage").setAttribute("data-success", "Success");
        }
        else {
            this.setState({ success: null, error: "Enter Valid URL" })
            // return document.getElementById("labelImage").setAttribute("data-error", "Enter Valid URL");
        }
    }

    clickHandler = () => {
        this.checkUrl()
        postService.newImagePost(this.state.input)
            .then(response => {
                this.props.reloadPage();
            })
    }

    render() {
        return (
            <div>
                <div id="modal2" className="modal">
                    <div className="modal-content">
                        <h4>New Image Post</h4>
                        <form>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="inputimg"
                                    type="text"
                                    value={this.state.input}
                                    onChange={this.handleInputChange}
                                     />
                                <label id="labelImage" className="active" htmlFor="inputimg">
                                    Image Url
                                    </label>
                                    <p>{this.state.success}</p>
                                    <p id="error">{this.state.error}</p>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <a className="modal-action modal-close waves-effect waves-green btn" onClick={this.clickHandler}>Post</a>
                        <a className="modal-action modal-close waves-effect waves-green btn left">Cancel</a>
                    </div>
                </div>
            </div >
        )
    }
}

export default NewImagePost;