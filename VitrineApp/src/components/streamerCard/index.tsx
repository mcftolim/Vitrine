import React from 'react';
import './StreamerCard.styles.css';
import { Streamer } from '../../types/streamer';

interface StreamerCardProps {
  streamer: Streamer;
  status: Streamer['type'];
}

const StreamerCard: React.FC<StreamerCardProps> = ({ streamer, status }) => {
  const getStatusClass = () => {
    switch(status) {
      case 'online': return 'on';
      case 'chat': return 'chat';
      case 'private': return 'private';
      case 'secret': return 'secret';
      default: return 'off';
    }
  };

  const getStatusTitle = () => {
    switch(status) {
      case 'online': return 'ON-LINE';
      case 'chat': return 'EM BATE-PAPO';
      case 'private': return 'EM PARTICULAR';
      case 'secret': return 'PRIVADO';
      default: return 'OFF-LINE';
    }
  };

  return (
    <div className={`streamer ${getStatusClass()}`} data-user-id={streamer.userId}>
      <div className={`status-title status-title-${getStatusClass()}`}>
        {getStatusTitle()}
      </div>
      
      {/* Imagem principal do streamer - mesma que a do perfil */}
      <div className="main-image">
        <img 
          src={streamer.profileImage}
          alt={streamer.name} 
        />
      </div>

      {/* Imagem circular do perfil */}
      <div className="profile">
        <div className="profile-circle">
          <img 
            src={streamer.profileImage}
            alt={streamer.name} 
          />
        </div>
      </div>

      <div className="name">
        <h1>{streamer.name}</h1>
      </div>
    </div>
  );
};

export default StreamerCard; 