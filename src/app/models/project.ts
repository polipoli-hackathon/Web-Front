import { state } from './project-user';

export interface Project {
    id: string;
    play: string;
    playtime: Date;
    price: number;
    place: string;
    state: state;
}
