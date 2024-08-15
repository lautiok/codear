import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT,
  db: process.env.DB,
  CLOUDINARYNAME: process.env.CLOUDINARY_NAME,
  CLOUDINARYKEY: process.env.CLOUDINARY_KEY,
  CLOUDINARYSECRET: process.env.CLOUDINARY_SECRET,
}