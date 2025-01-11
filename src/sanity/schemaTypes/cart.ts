export default {
    name: 'cart',
    type: 'document',
    title: 'Cart',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Product Name',
        },
        {
            name: 'productId',
            type: 'string',
            title: 'Product Id',
        },
        {
            name: 'tags',
            type: 'array',
            title: 'Tags',
            of: [{ type: 'string' }]
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Product Price',
        },
        {
            name: 'totalPrice',
            type: 'number',
            title: 'Product Price',
        },
        {
            name: 'quantity',
            type: 'number',
            title: 'Product Quantity',
        },
        {
            name: 'size',
            type: 'string',
            title: 'Size',
        },
        {
            name: 'color',
            type: 'string',
            title: 'Color',
        },
        {
            name: 'image',
            type: 'string',
            title: 'Product Image',
        }
    ]
};
