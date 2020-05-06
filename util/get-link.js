'use strict';
const { promisify } = require('util');
const youtubeSearch = require('yt-search');

const search = promisify(youtubeSearch);

/**
 * This function searches youtube for given songname and returns the link of topmost result
 *
 * @param {String} songName name of song
 * @returns {String} youtube link of music video
 */
const getLink = async songName => {
  try {

    console.log(songName);
    const result = await search(songName);
    //  console.log(result.videos);
    const [topResult] = result.videos;
    //console.log(topResult);
    if (topResult) {
      const youtubeLink = 'https://youtube.com' + topResult.url;

      return youtubeLink;
    }
    return "";
  } catch (error) {
    return error;
  }
};

module.exports = getLink;
