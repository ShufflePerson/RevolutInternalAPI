import T_All, { T_FullCardDetails } from './T_All';
import T_Current from './T_Current';
import T_Details from './T_Details';
import T_SignIn from './T_SignIn';
import T_Token from './T_Token';

interface Responses {
    All: T_All;
    FullCardDetails: T_FullCardDetails;
    Current: T_Current;
    Details: T_Details;
    SignIn: T_SignIn;
    Token: T_Token;
}

export default Responses;
