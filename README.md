# Url Scrapper
    It is an application to get open graph parameters from an input URL If the page has OG parameters set exclusively, otherwise get relevant meta details such as title, description, images etc through serverless framework and third party Node.js pluggins.

## Building Blocks
#### Serverless REST Api
    Serverless framework is used to create the conversion tool with REST Api integrated with AWS lambda services.

    configure the serverless through terminal by,
        serverless config credentials --provider aws --key <your_access_key_id> --secret <your_access_key_secret>

    deploy the application to lambda services from terminal by, 
        serverless deploy

#### Url Parser
    ```
    parser(url)
        .then(result=>{
            resolve(result);
        })
        .catch((error)=>{
            reject(error);
        })
    ```

    The basic part of the application is `parser` from `html-metadata-parser` Node.js library is used for the given URL meta data parsing. it convert and return given web page parameters if the URL is valid otherwise return `Not found` error.

#### Jest library for unit testing
    Node.js `jest` library is used for the test cases and can trigger the unit test through 'npm run test' command.