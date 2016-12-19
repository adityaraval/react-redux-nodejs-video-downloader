import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

class VideoDetails extends Component{

          renderConditionally(){
          if(_.isEmpty(this.props.video) && !this.props.video.data){
            return(
              <ul className="collection with-header col s12">
              <li className="collection-header">NODATA</li>
              </ul>
            );

          }else{
            const fileName =this.props.video.data.data.title;
            return(
              <ul className="collection with-header col s12">
              <li className="collection-item avatar">
                <img src={this.props.video.data.data.iurlhq} height="50px" width="50px" alt="" className="responsive-img" />
                  <p>Title : {this.props.video.data.data.title}<br/>
                  Duration : {Math.round((this.props.video.data.data.length_seconds)/60)}<br/>
                  Author : {this.props.video.data.data.author}<br/>
                  Video URL:{this.props.video.data.data.loaderUrl}</p>
              </li>
              {
                this.props.video.data.data.formats.map((item,i)=>{
                  return (<li key={i} className="collection-item">
                  <p>Extention::{item.container}<br/>Resolution::{item.resolution}
                    <a href={`${item.url}&title=${fileName}`} download={`${fileName}.${item.container}`}  className="secondary-content">
                      <span className="new badge" data-badge-caption="Download now"></span>
                    </a>
                    </p>
                  </li>)
                })
              }
              </ul>
            );
          }
  }
      render(){
        var divStyle = {color:'#f50057'};
        return(
          <div className="row">
          <div className="col s8 offset-s2">
          <div className="row">
            {this.renderConditionally()}
        </div>
        </div>
        </div>

        );
    }
}

function mapStateToProps({video}){
  //{video} ==> const video = state.video /// above code ///
  return {video};  /// {video} === {video:video}
}

export default connect(mapStateToProps)(VideoDetails);
