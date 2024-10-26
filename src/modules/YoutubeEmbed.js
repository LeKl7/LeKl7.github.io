import React from "react";
import PropTypes from "prop-types";
import {AdvancedImage, placeholder} from '@cloudinary/react';

const YoutubeEmbed = ({ embedId, imageData }) => (
  <div className="video-responsive">
    <AdvancedImage 
      id={`${imageData.publicID}`}
      cldImg={imageData}
      plugins={[placeholder({mode: 'predominant-color'})]}
      width ="100%"
      style={{borderRadius: "8px"}}
    />
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}?showinfo=0&autoplay=1&controls=0&modestbranding=1&mute=1&playlist=${embedId}&loop=1`}
      frameBorder="0"
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;