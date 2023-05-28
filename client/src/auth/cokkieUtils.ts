function getAccessTokenFromCookie() {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/,
    '$1'
  );
  return token;
}

export default getAccessTokenFromCookie;
/// narazie nie używane
