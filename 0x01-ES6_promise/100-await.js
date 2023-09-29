import { uploadPhoto, createUser } from './utils'; // Import the functions from utils.js

async function asyncUploadUser() {
  try {
    // Call the uploadPhoto and createUser functions concurrently using Promise.all
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto('guillaume.jpg'), // Call uploadPhoto
      createUser('Guillaume', 'Salva'), // Call createUser
    ]);

    // Return an object with the results
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If any of the functions fails, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
