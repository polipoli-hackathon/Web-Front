import { state } from './project-user';

export interface Project {
    id: string;
    title: string;
    state: state;
}
