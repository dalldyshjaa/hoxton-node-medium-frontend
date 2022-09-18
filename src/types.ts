export type ArticleT = {
  id: Number;
  text: String;
  img: String;
  claps_nr: Number;
  comments_nr: Number;
  userID: Number;
  user: UserT;
};
export type UserT = {
  id: 1;
  fullName: String;
  username: String;
  email: String;
  password: String;
  avatar: String;
  followers: Number;
};
