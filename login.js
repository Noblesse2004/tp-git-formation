function login(u, p) {
  const d = { utilisateur: u, motDePasse: p };
  console.log("Tentative de connexion de : " + d.utilisateur);
  return d;
}
