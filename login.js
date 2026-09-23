function login(nomUtilisateur, motDePasse) {
  const identifiants = { utilisateur: nomUtilisateur, motDePasse: motDePasse };
  console.log("Tentative de connexion de : " + identifiants.utilisateur);
  return identifiants;
}
