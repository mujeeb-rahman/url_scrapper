const { extractMetadataFromUrl } = require('../helper/extract_metadata.helper');

it('Correct response is generated with success case', async () => {
    let response = await extractMetadataFromUrl("https://www.amazon.com/Apple-iPhone-12-Pro-Graphite/dp/B09JFP3R1D/ref=sr_1_2?keywords=apple+iphone&qid=1648965863&sr=8-2");
    expect(response?.statusCode).toBe(200);
    }
);