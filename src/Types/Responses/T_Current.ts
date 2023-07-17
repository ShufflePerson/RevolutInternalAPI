export default interface T_Current {
    user: User;
    wallet: Wallet;
}

export interface User {
    id: string;
    individualId: string;
    createdDate: number;
    address: Address;
    birthDate: number[];
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    emailVerified: boolean;
    state: string;
    referralCode: string;
    code: string;
    kyc: string;
    underReview: boolean;
    locale: string;
    riskAssessed: boolean;
    sof: Sof;
    username: string;
    identityDetails: IdentityDetails;
    hasProfilePicture: boolean;
    appMode: string;
}

export interface Address {
    city: string;
    country: string;
    postcode: string;
    region: string;
    streetLine1: string;
    streetLine2: string;
}

export interface Sof {
    state: string;
}

export interface IdentityDetails {
    accountPurpose: string;
}

export interface Wallet {
    baseCurrency: string;
}
