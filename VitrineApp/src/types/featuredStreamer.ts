export interface FeaturedStreamer {
    userId: string;
    type: 'online' | 'chat' | 'private';
    name: string;
    profileImage: string;
  }