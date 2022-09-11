import sanityClient from '@sanity/client';
// import createClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// const config = (sanityClient({
export const client = (sanityClient({
    projectId: '8b8j773n',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
}))

// export const client = createClient(config);

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);