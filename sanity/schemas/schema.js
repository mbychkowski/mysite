// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Then we give our schema to the builder and provide the result to Sanity

import pizza from './pizza';
import topping from './topping';

// document schemas
import siteSettings from './documents/siteSettings';
import author from './documents/author';
import category from './documents/category';
import post from './documents/post';

// Object types
import bodyPortableText from './objects/bodyPortableText';
import bioPortableText from './objects/bioPortableText';
import excerptPortableText from './objects/excerptPortableText';
import mainImage from './objects/mainImage';
import authorReference from './objects/authorReference';

export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    pizza,
    topping,
    siteSettings,
    author,
    category,
    post,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    mainImage,
    authorReference,
  ]),
});
