export interface Project {
    id: string;
    title: string;
    state: 'cancel'
    | 'join'
    | 'requruite'
    | 'available';
}
