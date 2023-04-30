import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

/**
 * Configuration object for Firebase.
 * @typedef {Object} FirebaseConfig
 * @property {string} apiKey - The Firebase API key.
 * @property {string} authDomain - The Firebase Auth domain.
 * @property {string} projectId - The Firebase project ID.
 * @property {string} storageBucket - The Firebase storage bucket.
 * @property {string} messagingSenderId - The Firebase messaging sender ID.
 * @property {string} appId - The Firebase app ID.
 */

/**
 * @type {FirebaseConfig}
 */
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

/**
 * Uploads an image file to Firebase Storage and returns the image URL.
 * @async
 * @function uploadImageToCloudService
 * @param {File} file - The image file to upload.
 * @param {string} imgRef - The reference path for the image in Firebase Storage.
 * @returns {Promise<string>} The download URL of the uploaded image.
 * @throws Will throw an error if the upload fails.
 */
const uploadImageToCloudService = async (file, imgRef) => {
  try {
    const imageRef = ref(storage, imgRef);
    await uploadBytes(imageRef, file);
    const imageUrl = await getDownloadURL(imageRef);
    return imageUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

/**
 * Custom hook that provides access to the uploadImageToCloudService function.
 * @function useFirebaseStorage
 * @returns {{ uploadImageToCloudService: uploadImageToCloudService }} An object containing the uploadImageToCloudService function.
 */
const useFirebaseStorage = () => {
  return { uploadImageToCloudService };
};

export default useFirebaseStorage;
