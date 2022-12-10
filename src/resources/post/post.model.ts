import { Schema, model } from 'mongoose';
import Post from '@/resources/post/post.interface';

const PostSchema = new Schema(
    {
        title: {
            type: String,
            require: true,
        },
        body: {
            type: String,
            require: true,
        },
    },
    { timestamps: true },
);

export default model<Post>('Post', PostSchema);
