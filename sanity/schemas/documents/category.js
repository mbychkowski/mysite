import { FaHashtag as icon } from 'react-icons/fa';

export default {
  name: 'category',
  type: 'document',
  icon,
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ],
};
