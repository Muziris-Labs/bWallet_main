"use client";
import Image from "next/image";
import { client } from "@passwordless-id/webauthn";

const challenge = "a7c61ef9-dc23-4806-b486-2428938a547e";

const SetupAccount = () => {
  const handleAuth = async () => {
    const registration = await client.register("Anoy", challenge, {
      authenticatorType: "auto",
      userVerification: "discouraged",
      timeout: 60000,
      attestation: false,
      debug: false,
    });

    console.log(registration);
  };

  return (
    <div className="item-center flex justify-center">
      <Image
        src="/images/setup/passKey.png"
        width={440}
        height={440}
        className="hover:cursor-pointer"
        onClick={handleAuth}
      />
    </div>
  );
};

export default SetupAccount;
