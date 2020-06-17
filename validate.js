import { isSubstring, isInDescription } from './utils';

export const isValidUser = 
  (user, keyPhrases, country, noOfFollowers) => {
    const { description, location, followers_count } = user;    
    

    return followers_count <= noOfFollowers &&
      isInDescription(keyPhrases, description) &&
      isSubstring(country, location);
  };
