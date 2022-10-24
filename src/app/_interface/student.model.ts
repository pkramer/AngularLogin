import { Subject } from './subject.model';
export interface Student{
    id: string;
    name: string;
    dateOfBirth: Date;
    address: string;

    subjects?: Subject[];
}