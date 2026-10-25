const budget_du_client = 20000;
const prix_dun_cahier = 1500;
const quantite_de_cahier = 4;
const prix_dun_stylos = 500;
const quantite_de_stylos = 3;

 // calcul_du_montant_des_achats
 // montant_total_cahier
 const montant_cahiers = prix_dun_cahier * quantite_de_cahier;
 // montant_total_stylos 
 const montant_stylos = prix_dun_stylos * quantite_de_stylos;
 // montant_total_stylos_et_cahier
 const montant_total = montant_cahiers + montant_stylos;
 

console.log("======= caisse ========");
console.log("cahiers :", montant_cahiers, "FCFA");
console.log("stylos :", montant_stylos, "FCFA");
console.log("total :", montant_total, "FCFA");
console.log("budget :", budget_du_client, "FCFA");


if (montant_total <= budget_du_client) {
console.log( "budget suffisant") ;
} else {
    console.log("budget insuffisant");
}

for (let i = 1; i<=5; i++){
    console.log("achat numero", i)
}
