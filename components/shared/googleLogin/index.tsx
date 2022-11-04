import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import env from "utils/constants/env";

export default function LoginWithGoogle(): JSX.Element {
  const clientId = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_ID ?? env.googleAppId;

  return (
    /* eslint-disable */
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={() => { }}
        text="continue_with"
      />
    </GoogleOAuthProvider>
    /* eslint-enable */
  );
};
