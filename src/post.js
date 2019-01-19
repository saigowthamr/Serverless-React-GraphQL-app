import React from 'react';
import EditPost from './editPost';
import DeletePost from './deletePost'

class Post extends React.Component {

    componentDidMount() {
        this.props.subscribeToMore();
    }


    render() {
        const items = this.props.data.listPosts.items;
        if (items.length === 0) return <p>No items found</p>
        return items.map((post) => {
            return (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <time dateTime={post.createdAt}>{new Date(post.createdAt).toDateString()}</time>
                    <br />
                    <EditPost {...post} />
                    <DeletePost {...post} />
                </div>

            )
        })


    }

}


export default Post;