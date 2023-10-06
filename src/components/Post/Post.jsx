const Post = ({post}) => {
const {id,title,body} = post;

const postStyle = {
    border : '2px solid blue',
    padding : '15px',
    margin : '10px',
    borderRadius: '20px'
}
    return (
        <div style={postStyle}>
            <h4>Post Id : {id}</h4>
            <p>Title : {title}</p>
            <p><small>{body}</small></p>
        </div>
    );
};

export default Post;