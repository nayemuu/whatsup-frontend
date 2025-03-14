export type loginPayloadType = {
  email: string;
  password: string;
};

export type loginResponseType = {
  token: { accessToken: string; refreshToken: string };
  user: { name: string; email: string; picture: string };
};
