import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getVideoDetails} from '../actions/actions';

class SearchBox extends Component{
    constructor(props) {
        super(props);
        this.state={Video_URL:""};
        this.onSubmitSearchTerm = this.onSubmitSearchTerm.bind(this);
        this.onChangeSearchTerm = this.onChangeSearchTerm.bind(this);
    }
    onChangeSearchTerm(event){
        this.setState({Video_URL:event.target.value});
    }
    onSubmitSearchTerm(event){
        event.preventDefault();
        console.log(this.state.Video_URL);
        this.props.getVideoDetails(this.state.Video_URL);
    }

    render(){
        var divStyle = {color:'#f50057'};
        return(
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="row">
                        <h5>Paste video url below</h5>
                        <div className="input-field col s12">
                          <form action="get" onSubmit={this.onSubmitSearchTerm}>
                            <input required="required" placeholder="Paste URL here" id="video_url" type="text" style={divStyle} className="validate" onChange={this.onChangeSearchTerm} value={this.state.videoURL} />
                                <label htmlFor="video_url" style={divStyle}>Paste Here</label>
                            <button type="submit" className=" pink accent-3 btn">Search
                                <i className="material-icons right"></i>
                            </button>
                          </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


function mapPropsToDispatch(dispatch){
    return bindActionCreators({getVideoDetails},dispatch);
}


export default connect(null,mapPropsToDispatch)(SearchBox);
