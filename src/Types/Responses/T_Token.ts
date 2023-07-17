import E_ErrorCodes from '../E_ErrorCodes';

interface T_Token {
    //If error is present:
    code?: E_ErrorCodes;
    message?: string;

    //Otherwise:
    accessToken?: string;
    refreshCode?: string;
    tokenExpiryDate?: number;

    user?: {
        id: string;
        state: 'ACTIVE';
    };
}

export default T_Token;
