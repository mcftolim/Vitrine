import React from 'react';
import './FeaturedStreamers.styles.css';
import { FeaturedStreamer as IFeaturedStreamer } from '../../types/featuredStreamer';
import FeaturedStreamer from '../featuredStreamer';

interface FeaturedStreamersProps {
  streamers?: IFeaturedStreamer[];
}

const FeaturedStreamers: React.FC<FeaturedStreamersProps> = ({ streamers = [] }) => {
  // Dados mockados para streamers em destaque (caso não receba via props)
  const defaultStreamers: IFeaturedStreamer[] = [
    { 
      userId: "featured1",
      name: "Destaque 1", 
      type: "online" as const,
      profileImage: "/assets/streamerTest.svg"
    },
    { 
      userId: "featured2",
      name: "Destaque 2", 
      type: "chat" as const,
      profileImage: "/assets/streamerTest.svg"
    },
    { 
      userId: "featured3",
      name: "Destaque 3", 
      type: "private" as const,
      profileImage: "/assets/streamerTest.svg"
    }
  ];

  const displayStreamers = streamers.length > 0 ? streamers : defaultStreamers;

  return (
    <div className="featured-section">
      <h1 className="title">DESTAQUES</h1>
      <hr />
      <div className="featured-container">
        <div className="featured-streamers">
          {displayStreamers.map((streamer) => (
            <FeaturedStreamer 
              key={streamer.userId}
              streamer={streamer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedStreamers; 