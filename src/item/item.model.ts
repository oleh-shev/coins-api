import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  data: {
    type: [],
  },
});
