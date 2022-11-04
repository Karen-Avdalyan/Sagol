import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import env from "utils/constants/env";

export default function SignUpWithGoogle(): JSX.Element {
  const clientId = env.googleAppId;

  return (
    /* eslint-disable */
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={() => { }}
        text="signup_with"
      />
    </GoogleOAuthProvider>
    /* eslint-enable */
  );
};
