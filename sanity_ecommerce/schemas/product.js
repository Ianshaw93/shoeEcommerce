export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }], 
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',           
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            title: 'QuantitySize6',
            name: 'quantitySize6',
            type: 'number',
            validation: Rule => Rule.required().positive().integer()
          },
        {
        title: 'QuantitySize7',
        name: 'quantitySize7',
        type: 'number',
        validation: Rule => Rule.required().positive().integer()
        },
        {
            title: 'QuantitySize8',
            name: 'quantitySize8',
            type: 'number',
            validation: Rule => Rule.required().positive().integer()
          },
        {
        title: 'QuantitySize9',
        name: 'quantitySize9',
        type: 'number',
        validation: Rule => Rule.required().positive().integer()
        },
        {
        title: 'QuantitySize10',
        name: 'quantitySize10',
        type: 'number',
        validation: Rule => Rule.required().positive().integer()
        },
        {
            title: 'QuantitySize11',
            name: 'quantitySize11',
            type: 'number',
            validation: Rule => Rule.required().positive().integer()
        },
        {
        title: 'QuantitySize12',
        name: 'quantitySize12',
        type: 'number',
        validation: Rule => Rule.required().positive().integer()
        },
    ]
}