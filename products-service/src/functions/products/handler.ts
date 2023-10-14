import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

const getProductsList = async () => {
    return formatJSONResponse({
        data: require('./response.mock.json'),
    });
};

export const main = middyfy(getProductsList);
