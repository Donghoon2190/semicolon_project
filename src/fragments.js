export const USER_FRAGMENT = `
fragment UserParts on User{
id
username
email
firstName
lastName
bio
posts{
    id
    caption
}
}`;
export const COMMENT_FRAGMENT = `
fragment UserParts on User{
      id
      text
      user{
        username
      }
    }`;
export const LIKE_FRAGMENT = `
fragment UserParts on  User{
      user{
        username
        firstName
        lastName
      }
    }`;