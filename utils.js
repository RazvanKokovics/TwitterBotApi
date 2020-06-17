export const isSubstring = (partialString, string) => {
  return string.toLowerCase().includes(partialString.toLowerCase());
};

export const isInDescription = (keyPhrases, description) => {
  let foundKeyPhrasesCount = 0;

  keyPhrases.map((keyPhrase) => {
    foundKeyPhrasesCount = isSubstring(keyPhrase, description) ? 
      foundKeyPhrasesCount : foundKeyPhrasesCount + 1;
  });

  return foundKeyPhrasesCount > 0;
};