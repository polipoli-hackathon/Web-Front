import { state } from './project-user';

export interface Project {
    id: string;
    playName: string;
    startAt: Date;
    price: number;
    placeName: string;
    state: state;
}
