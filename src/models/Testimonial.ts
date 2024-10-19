import mongoose, { Document, Schema } from 'mongoose';

interface TestimonialType extends Document {
    user: mongoose.Types.ObjectId; // Reference to the User
    name:string;
    content: string;
    rating: number; 
    isDisplayed:boolean
    photo:string;

}

const testimonialSchema: Schema<TestimonialType> = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type:String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    isDisplayed:{
        type:Boolean
    },
    rating: {
        type: Number,
        min: 1, // Assuming a rating system from 1 to 5
        max: 5,
    },
}, {
    timestamps: true,
});

const Testimonial = mongoose.models.Testimonial || mongoose.model<TestimonialType>('Testimonial', testimonialSchema);
export default Testimonial;
