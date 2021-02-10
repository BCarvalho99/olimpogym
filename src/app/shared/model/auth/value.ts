import { Claim } from './claim';

export interface Value {
    id: number;
    email: string;
    token: string;
    claims: Claim[];
}