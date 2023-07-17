import T_SignIn from './T_SignIn';
import T_Token from './T_Token';
import T_Issue from './T_Issue';
import T_UpdateToken from './T_UpdateToken';

interface Requests {
    SignIn: T_SignIn;
    Token: T_Token;
    Issue: T_Issue;
    UpdateToken: T_UpdateToken;
}

export default Requests;
