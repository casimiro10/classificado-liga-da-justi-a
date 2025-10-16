const ligaDaJustiça = [{nome: "Superman", cidade: "Metrópolis", poder:10000}, 
                       {nome: "Batman", cidade: "Gotham", poder:5000}, 
                       {nome: "Flash", cidade: "Central City", poder:8000}];
                       console.log ("--- Relatório de Especialidades da Liga da Justiça ---");
for (const heroi of ligaDaJustiça) {
    let modoDeCombate;
    if (heroi.poder <= 1500){
        modoDeCombate = " Salvar gato no telhado e ajuda na vizinhança";}
    else if (heroi.poder > 1501 && heroi.poder <=5000){
        modoDeCombate = " Assalto a banco e combate ao crime organizado na cidade";}
    else if (heroi.poder > 5001 && heroi.poder <=8000){
        modoDeCombate = "Ameças temporais e combate com metahumanos";}
    else if (heroi.poder > 8001 && heroi.poder <=10000){
        modoDeCombate = "Invasões Alienígenas e combates com Super Vilões";}
console.log ("O herói " + heroi.nome + " de " + heroi.cidade + " possui um poder de " + heroi.poder + " e seu modo de combate é: " + modoDeCombate);
console.log ("-------------------------------------------------------")};

  


                     

