function userIsLogged() {
  const valor = sessionStorage.getItem("dados");
  return !!valor;
}

export default userIsLogged;
