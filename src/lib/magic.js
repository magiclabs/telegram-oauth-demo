import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth2";

const createMagic = (key) => {
  return (
    typeof window !== "undefined" &&
    new Magic(key, {
      endpoint: 'https://auth.stagef.magic.link',
      extensions: [new OAuthExtension()],
    })
  );
};

export const magic = createMagic("pk_live_A8F1C027AB2D1143");
