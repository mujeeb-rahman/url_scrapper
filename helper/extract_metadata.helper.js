const { parser } = require('html-metadata-parser');
const { createResponse, createErrorResponse } = require('../shared/common');
const { httpConstants, errorConstants } = require('../shared/constant');

function extractMetadataFromUrl (url) {
    return new Promise(async function(resolve, reject) {
        let finalResponse = {};
        let responseObject = {};

        await parser(url)
        .then(result=>{
            if(result?.og?.length > 0){
            responseObject = result?.og;
            }
            else{
            delete result?.og;
            responseObject = result;
            }
            finalResponse = createResponse(responseObject, httpConstants.SUCCESS_CODE);

            resolve(finalResponse);
        })
        .catch((error)=>{
            if(error?.response?.status === httpConstants.NOT_FOUND){
                finalResponse = createErrorResponse(errorConstants?.INVALID_URL, httpConstants.NOT_FOUND);
            }
            else{
                finalResponse = createErrorResponse(error?.response?.statusText, error?.response?.status);
            }
            reject(finalResponse);
        })
    });
}

module.exports = {
    extractMetadataFromUrl
};