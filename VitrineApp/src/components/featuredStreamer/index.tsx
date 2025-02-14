import React from 'react';
import { FeaturedStreamer as IFeaturedStreamer } from '../../types/featuredStreamer';

interface FeaturedStreamerProps {
  streamer: IFeaturedStreamer;
}

const FeaturedStreamer: React.FC<FeaturedStreamerProps> = ({ streamer }) => {
  const getStatusText = (type: IFeaturedStreamer['type']) => {
    switch(type) {
      case 'online':
        return 'ON-LINE';
      case 'chat':
        return 'EM BATE-PAPO';
      case 'private':
        return 'EM PARTICULAR';
    }
  };

  return (
    <div className={`featured-streamer ${streamer.type}`}>
      <div className="featured-image-container">
        <img 
          src={streamer.profileImage}
          alt={streamer.name}
          className="featured-streamer-image"
        />
      </div>
      <div className={`featured-status ${streamer.type}`}>
        {getStatusText(streamer.type)}
      </div>
      <div className="featured-name">
        DESTAQUE {streamer.name}
      </div>
    </div>
  );
};

export default FeaturedStreamer; 