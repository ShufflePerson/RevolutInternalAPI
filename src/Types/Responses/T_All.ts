type T_All = T_FullCardDetails[];

export interface T_FullCardDetails {
    id: string;
    walletId: string;
    state: string;
    virtual: boolean;
    disposable: boolean;
    credit: boolean;
    instalment: boolean;
    customised: boolean;
    brand: string;
    design: string;
    designGroup: string;
    lastFour: string;
    expiryDate: string;
    replaced: boolean;
    createdDate: number;
    replacedCardId?: string;
    productType: string;
    settings: Settings;
    delivery: Delivery;
    usage: number;
    preexpired: boolean;
    applePayEligible: boolean;
    googlePayEligible: boolean;
    cardClickActivationEligible: boolean;
    label?: string;
    lastUsedDate?: number;
    colour?: string;
}

export interface Settings {
    locationSecurityEnabled: boolean;
    magstripeDisabled: boolean;
    atmWithdrawalsDisabled: boolean;
    ecommerceDisabled: boolean;
    contactlessDisabled: boolean;
    initial: boolean;
    pockets: any[];
}

export interface Delivery {
    status: string;
    trackingChannel?: string;
    method?: string;
    address?: string;
    addressDetails?: AddressDetails;
    deliveryUpdateAllowed?: boolean;
    convertedOn?: string;
    ept?: string;
    edt?: string;
}

export interface AddressDetails {
    city: string;
    country: string;
    postcode: string;
    region?: string;
    streetLine1: string;
    streetLine2?: string;
}

export default T_All;
