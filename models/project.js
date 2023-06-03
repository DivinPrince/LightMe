import { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: [true, 'name is required.'],
  },
  url: {
    type: String,
    required: [true, 'url is required.'],
  },
  image: {
    type: String,
    required: [true, 'image is required.'],
  }
});
const Project = models.Project || model('Project', ProjectSchema);

export default Project; 