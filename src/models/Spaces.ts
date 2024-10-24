import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the testimonial document
interface SpaceType extends Document {
    userId: mongoose.Schema.Types.ObjectId; // Reference to the User
    Title: string;
    Message: string;
    photo: string;
    
}

// Define the schema for the Testimonial
const spaceSchema: Schema<SpaceType> = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Refers to the User model
        required: true,
    },
    Title: {
        type: String,
        required: true,
    },
    Message: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false, // Assuming photo is not required
    },
}, {
    timestamps: true,  // Automatically adds createdAt and updatedAt
});

// Create the model for Testimonial
const Space = mongoose.models.Testimonial || mongoose.model<SpaceType>('Testimonial', spaceSchema);
export default Space;
