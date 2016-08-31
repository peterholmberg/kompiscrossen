import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class News extends Component {
   constructor(props){
      super(props);
   }

   render(){
      let { newsState } = this.props;
      let { news } = newsState.toJS();
      return(
         <div>
            {news.map(post =>
               <div key={post.id} className="kc-news-post">
                  <label>{post.title}</label> <em className="kc-muted">av {post.author} {post.posted}</em>
                  <div className="kc-news-content">
                     {post.content}
                  </div>
               </div>
            )}
         </div>
      )
   }
}

function propProvider(reduxState, props) {
   const { appState, newsState } = reduxState;

   return {
      appState,
      newsState
   };
}

export default connect(propProvider)(News);