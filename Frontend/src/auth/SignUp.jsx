import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div>
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        appearance={{
          elements: {
            formFieldOptionalText: {
              display: "none",
            },
          },
        }}
      />
    </div>
  );
};

export default SignUpPage;
