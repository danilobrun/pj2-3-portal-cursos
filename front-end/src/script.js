const corteCiclo = (corte, corte2, religacao, religacao2, efetividade, efetividade2) => {
    totalCorte = corte + corte2
    totalReligacao = religacao + religacao2
    totalEfetividade = efetividade + efetividade2
    console.log(`Total Corte:${totalCorte}
    Total Religacao: ${totalReligacao}
    Total Efetividade: ${totalEfetividade}`);
}

corteCiclo(99, 176, 68, 215, 35, 89)