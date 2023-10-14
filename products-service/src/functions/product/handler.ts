import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

const getProductById = async (event) => {

    const path = event.path.split('/');
    const productId = path[path.length - 1];

    const productList = require('../products/response.mock.json');

    const product = productList.find(({ id }) => id === productId);

    if(product) {
        return formatJSONResponse({
            data: product,
        });
    }

    return formatJSONResponse({
        message: `product ${productId} not found`,
    });
};

export const main = middyfy(getProductById);
