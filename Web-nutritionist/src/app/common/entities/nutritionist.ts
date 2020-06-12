import {User} from './user';

export interface Nutritionist{
    nutritionist_id: number;
    card_id?: number;
    image?: any;
    data_type?: string;
    patients?: string[];
    user: User;
}