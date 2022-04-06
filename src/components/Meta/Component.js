import React from 'react';

import { Helmet } from 'react-helmet';
import { title as appTitle } from 'config';

function Meta({ description, meta, title, image }) {
  const textTitle = `${appTitle} ${title ? '| ' + title : ''}`;

  return (
    <Helmet
      title={textTitle}
      meta={[
        {
          name: `description`,
          content: description
        },
        {
          property: `og:title`,
          content: textTitle
        },
        {
          property: `og:description`,
          content: description
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: image
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:title`,
          content: textTitle
        },
        {
          name: `twitter:description`,
          content: description
        }
      ].concat(meta)}
    />
  );
}

Meta.defaultProps = {
  meta: [],
  image: `${window.location.origin}/images/cover.png`
};

export default Meta;
