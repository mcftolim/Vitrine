export interface Streamer {
    userId: string;
    type: 'online' | 'offline' | 'chat' | 'private' | 'secret';
    name: string;
    profileImage: string;
    coverImage?: string; // Opcional com o operador "?"
}