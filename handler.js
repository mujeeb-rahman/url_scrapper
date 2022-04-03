'use strict';

const {extractMetadataFromUrl} = require('./helper/extract_metadata.helper');

module.exports.getOgMetadata= async (event, context, callback) => {
  const requestBody = JSON.parse(event?.body);
  const url = requestBody?.url;

  await extractMetadataFromUrl(url)
    .then((response)=>{
      callback(null, {response});
    })
};
