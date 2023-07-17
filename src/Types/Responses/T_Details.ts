interface T_Details {
    cvv?: string;
    pan: string;
    expiry?: {
        month: number;
        year: number;
    };
}

export default T_Details;
