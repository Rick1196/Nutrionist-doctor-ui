export interface User {
    user_id?: number;
    first_name: string;
    last_name: string;
    phone: number;
    countrie: string;
    state: string;
    citie: string;
    direction: string;
    email?: string;
    gender: string;
    birth_date: Date;
    register_date?: Date;
    last_login?: Date;
    role: string;
    status?: string;
    password: string;
    user_name: string;
    confirmed: boolean;
    confirmation_code: string;
}
