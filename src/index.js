import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
<div className="ui container comments">
<ApprovalCard />
   <CommentDetail   avatar={faker.image.avatar()} author="Danny"  timeAgo="Today at 4:45PM"  metaData="Cover me, I am going ghost"/> /* //provide information from the parent to the child */}
   <CommentDetail   avatar={faker.image.avatar()} author="Sam"    timeAgo="Today at 1:50AM"  metaData="oh boy"/>
   <CommentDetail   avatar={faker.image.avatar()} author="Tucker" timeAgo="Yesterday at 5:00PM" metaData="I love meat"/>
</div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));