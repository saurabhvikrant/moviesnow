import React, { Fragment } from 'react';
import ProgressiveImage from 'react-progressive-image';

const Image = ({ src, alt, className }) => (
  <ProgressiveImage
    src={src}
    placeholder="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==">
    {(currentSrc, loading) => (
      <Fragment>
        <img src={currentSrc} alt={alt} className={loading ? `${className} loading-img` : className} style={imageStyle} />
        <noscript>
          <img src={src} alt={alt} className={className} style={imageStyle} />
        </noscript>
      </Fragment>
    )}
  </ProgressiveImage>
);

const imageStyle = {
  "borderRadius": '13px'
}

export default Image;
