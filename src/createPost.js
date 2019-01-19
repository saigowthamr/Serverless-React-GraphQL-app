import React from 'react';
import { Mutation } from 'react-apollo'
import { createPost } from './graphql/mutations'
import gql from 'graphql-tag';
import { listPosts } from './graphql/queries';


class CreatePost extends React.Component {

    handleSubmit = (e, createPost) => {
        e.preventDefault();
        createPost({
            variables: {
                input: {
                    title: this.title.value,
                    body: this.body.value,
                    createdAt: new Date().toISOString()
                }
            }
        }).then(res => {

            this.title.value = "";
            this.body.value = "";
        })


    }
    render() {
        return (
            <div>
                <h1>Create post</h1>

                <Mutation mutation={gql(createPost)} >
                    {(createPost, { data, loading, error }) => {
                        return (
                            <div>
                                <form className="add-post" onSubmit={(e) =>
                                    this.handleSubmit(e, createPost)}>
                                    <input type="text" placeholder="Title"
                                        ref={node => this.title = node}
                                        required
                                    />
                                    <textarea rows="3" cols="40" placeholder="Body"
                                        ref={node => this.body = node}
                                        required
                                    />
                                    <button>{loading ? "Yes boss..." : "Create Post"}</button>
                                </form>
                                {error && <p>{error.message}</p>}
                            </div>
                        )

                    }}

                </Mutation>
            </div>
        )
    }

}


export default CreatePost
