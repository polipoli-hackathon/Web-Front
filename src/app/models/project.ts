import { state } from './project-user';

export interface Project {
    id: string;
    playtime: Date;
    price: number;
    place: string;
    state: state;
}
