import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, // cloudinary url
            required: true  // cloudinary url
        },
        thumbnail: {
            type: String, // cloudinary url
            required: true  // cloudinary url
        },
        title: {
            type: String, 
            required: true  
        },
        description: {
            type: String, 
            required: true  
        },
        duration: {
            type: Number, 
            required: true  
        },
        views: {
            type: Number, 
            default: true 
        },
        isPublished: {
            type: Boolean, 
            default: true  
        },
        owner: {
            type: Schema.Types.ObjectId, 
            ref: "User"  
        },
    },
    {
        timestamps: true
    }
)


videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)

