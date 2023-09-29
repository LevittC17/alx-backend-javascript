import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.all([userPromise, photoPromise])
    .then(([userValue, photoValue]) => [
      { status: 'fulfilled', value: userValue },
      { status: 'fulfilled', value: photoValue },
    ])
    .catch((error) => [
      { status: 'rejected', reason: error.message },
      { status: 'rejected', reason: 'Error: photo upload failed' },
    ]);
}
