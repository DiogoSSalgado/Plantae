const data = new Date()
const dia = [data.getDate(), data.getMonth() + 1]

const N =  [2.75, 5.00, 3.00, 2.45, 1.45, 2.60, 2.75, 1.41, 2.10, 2.83]
const P =  [1.70, 0.35, 0.27, 0.30, 0.20, 0.44, 0.14, 0.20, 0.21, 0.40]
const K =  [2.50, 2.10, 2.50, 2.30, 2.10, 2.15, 1.40, 1.27, 1.31, 2.54]
const Ca = [1.75, 1.25, 0.20, 1.95, 0.45, 1.07, 4.25, 0.45, 0.47, 0.90]
const Mg = [0.40, 0.70, 0.23, 0.25, 0.55, 0.32, 0.42, 0.19, 0.21, 0.38]
const S =  [0.17, 0.30, 0.18, 0.13, 0.17, 0.38, 0.25, 0.22, 0.51, 0.44]

var nutriPresentes = [2.75, 1.70, 2.60, 1.75, 0.40, 0.17]

export const estacoes = () => {
    // Outono = 1
    // Inverno = 2
    // Primavera = 3
    // Verão = 4 

    let e

    switch(dia[1]) {
        case 1: 
            e = 4
            break
        case 2: 
            e = 4
            break
        case 3: 
            if(dia[0] > 20) {
                e = 1
            } else {
                e = 4
            }
            break
        case 4: 
            e = 1
            break
        case 5: 
            e = 1
            break
        case 6: 
            if(dia[0] > 20) {
                e = 2
            } else {
                e = 1
            }
            break
        case 7: 
            e = 2
            break
        case 8: 
            e = 2
            break
        case 9: 
            if(dia[0] > 20) {
                e = 3
            } else {
                e = 2
            }
            break
        case 10: 
            e = 3
            break
        case 11: 
            e = 3
            break
        case 12:
            if(dia[0] > 20) {
                e = 4
            } else {
                e = 3
            }
            break
    }

    return e
}

export const cafe = () => {
    let estacao = estacoes()
    let NFal =  (nutriPresentes[0] - N[0]).toFixed(2)
    let PFal =  (nutriPresentes[1] - P[0]).toFixed(2)
    let KFal =  (nutriPresentes[2] - K[0]).toFixed(2)
    let CaFal = (nutriPresentes[3] - Ca[0]).toFixed(2)
    let MgFal = (nutriPresentes[4] - Mg[0]).toFixed(2)
    let SFal =  (nutriPresentes[5] - S[0]).toFixed(2)
    let rank = 0

    let nutriFaltando = [parseFloat(NFal), parseFloat(PFal), parseFloat(KFal), parseFloat(CaFal), parseFloat(MgFal), parseFloat(SFal)]

    if(estacao == 3) {
        rank = (Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1)
    } else {
        rank = ((Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1) * 3)
    }

    return(['Café', nutriFaltando, rank])

}

export const soja = () => {
    let estacao = estacoes()
    let NFal =  (nutriPresentes[0] - N[1]).toFixed(2)
    let PFal =  (nutriPresentes[1] - P[1]).toFixed(2)
    let KFal =  (nutriPresentes[2] - K[1]).toFixed(2)
    let CaFal = (nutriPresentes[3] - Ca[1]).toFixed(2)
    let MgFal = (nutriPresentes[4] - Mg[1]).toFixed(2)
    let SFal =  (nutriPresentes[5] - S[1]).toFixed(2)
    let rank = 0

    let nutriFaltando = [parseFloat(NFal), parseFloat(PFal), parseFloat(KFal), parseFloat(CaFal), parseFloat(MgFal), parseFloat(SFal)]
    if(estacao == 3) {
        rank = (Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1)
    } else {
        rank = ((Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1) * 3)
    }
    return(['Soja', nutriFaltando, rank])

}

export const milho = () => {
    let estacao = estacoes()
    let NFal =  (nutriPresentes[0] - N[2]).toFixed(2)
    let PFal =  (nutriPresentes[1] - P[2]).toFixed(2)
    let KFal =  (nutriPresentes[2] - K[2]).toFixed(2)
    let CaFal = (nutriPresentes[3] - Ca[2]).toFixed(2)
    let MgFal = (nutriPresentes[4] - Mg[2]).toFixed(2)
    let SFal =  (nutriPresentes[5] - S[2]).toFixed(2)
    let rank = 0

    let nutriFaltando = [parseFloat(NFal), parseFloat(PFal), parseFloat(KFal), parseFloat(CaFal), parseFloat(MgFal), parseFloat(SFal)]
    if(estacao == 3) {
        rank = (Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1)
    } else {
        rank = ((Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1) * 3)
    }

    return(['Milho', nutriFaltando, rank])

}

export const feijao = () => {
    let estacao = estacoes()
    let NFal =  (nutriPresentes[0] - N[3]).toFixed(2)
    let PFal =  (nutriPresentes[1] - P[3]).toFixed(2)
    let KFal =  (nutriPresentes[2] - K[3]).toFixed(2)
    let CaFal = (nutriPresentes[3] - Ca[3]).toFixed(2)
    let MgFal = (nutriPresentes[4] - Mg[3]).toFixed(2)
    let SFal =  (nutriPresentes[5] - S[3]).toFixed(2)
    let rank = 0

    let nutriFaltando = [parseFloat(NFal), parseFloat(PFal), parseFloat(KFal), parseFloat(CaFal), parseFloat(MgFal), parseFloat(SFal)]
    if(estacao == 3) {
        rank = (Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1)
    } else if(estacao == 2){
        rank = (Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1)
    } else if(estacao == 1) {
        rank = (Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1)
    } else {
        rank = ((Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1) * 3)
    }

    return(['Feijão', nutriFaltando, rank])

}

export const capim = () => {
    let estacao = estacoes()
    let NFal =  (nutriPresentes[0] - N[4]).toFixed(2)
    let PFal =  (nutriPresentes[1] - P[4]).toFixed(2)
    let KFal =  (nutriPresentes[2] - K[4]).toFixed(2)
    let CaFal = (nutriPresentes[3] - Ca[4]).toFixed(2)
    let MgFal = (nutriPresentes[4] - Mg[4]).toFixed(2)
    let SFal =  (nutriPresentes[5] - S[4]).toFixed(2)
    let rank = 0

    let nutriFaltando = [parseFloat(NFal), parseFloat(PFal), parseFloat(KFal), parseFloat(CaFal), parseFloat(MgFal), parseFloat(SFal)]
    if(estacao == 3) {
        rank = (Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1)
    } else {
        rank = ((Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1) * 3)
    }

    return(['Capim', nutriFaltando, rank])
}

export const sorgo = () => {
    let estacao = estacoes()
    let NFal =  (nutriPresentes[0] - N[5]).toFixed(2)
    let PFal =  (nutriPresentes[1] - P[5]).toFixed(2)
    let KFal =  (nutriPresentes[2] - K[5]).toFixed(2)
    let CaFal = (nutriPresentes[3] - Ca[5]).toFixed(2)
    let MgFal = (nutriPresentes[4] - Mg[5]).toFixed(2)
    let SFal =  (nutriPresentes[5] - S[5]).toFixed(2)
    let rank = 0

    let nutriFaltando = [parseFloat(NFal), parseFloat(PFal), parseFloat(KFal), parseFloat(CaFal), parseFloat(MgFal), parseFloat(SFal)]
    if(estacao == 3) {
        rank = (Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1)
    } else {
        rank = ((Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1) * 3)
    }

    return(['Sorgo', nutriFaltando, rank])
}

export const laranja = () => {
    let estacao = estacoes()
    let NFal =  (nutriPresentes[0] - N[6]).toFixed(2)
    let PFal =  (nutriPresentes[1] - P[6]).toFixed(2)
    let KFal =  (nutriPresentes[2] - K[6]).toFixed(2)
    let CaFal = (nutriPresentes[3] - Ca[6]).toFixed(2)
    let MgFal = (nutriPresentes[4] - Mg[6]).toFixed(2)
    let SFal =  (nutriPresentes[5] - S[6]).toFixed(2)
    let rank = 0

    let nutriFaltando = [parseFloat(NFal), parseFloat(PFal), parseFloat(KFal), parseFloat(CaFal), parseFloat(MgFal), parseFloat(SFal)]
    if(estacao == 1) {
        rank = (Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1)
    } else {
        rank = ((Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1) * 3)
    }

    return(['Laranja', nutriFaltando, rank])
}

export const alho = () => {
    let estacao = estacoes()
    let NFal =  (nutriPresentes[0] - N[7]).toFixed(2)
    let PFal =  (nutriPresentes[1] - P[7]).toFixed(2)
    let KFal =  (nutriPresentes[2] - K[7]).toFixed(2)
    let CaFal = (nutriPresentes[3] - Ca[7]).toFixed(2)
    let MgFal = (nutriPresentes[4] - Mg[7]).toFixed(2)
    let SFal =  (nutriPresentes[5] - S[7]).toFixed(2)
    let rank = 0

    let nutriFaltando = [parseFloat(NFal), parseFloat(PFal), parseFloat(KFal), parseFloat(CaFal), parseFloat(MgFal), parseFloat(SFal)]
    if(estacao == 1) {
        rank = (Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1)
    } else {
        rank = ((Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1) * 3)
    }

    return(['Alho', nutriFaltando, rank])
}

export const cana = () => {
    let estacao = estacoes()
    let NFal =  (nutriPresentes[0] - N[8]).toFixed(2)
    let PFal =  (nutriPresentes[1] - P[8]).toFixed(2)
    let KFal =  (nutriPresentes[2] - K[8]).toFixed(2)
    let CaFal = (nutriPresentes[3] - Ca[8]).toFixed(2)
    let MgFal = (nutriPresentes[4] - Mg[8]).toFixed(2)
    let SFal =  (nutriPresentes[5] - S[8]).toFixed(2)
    let rank = 0

    let nutriFaltando = [parseFloat(NFal), parseFloat(PFal), parseFloat(KFal), parseFloat(CaFal), parseFloat(MgFal), parseFloat(SFal)]
    if(estacao == 4) {
        rank = (Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1)
    } else if(estacao == 1){
        rank = ((Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1) * 1.5)
    } else {
        rank = ((Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1) * 3)
    }

    return(['Cana-de-açúcar', nutriFaltando, rank])
}

export const tomate = () => {
    let estacao = estacoes()
    let NFal =  (nutriPresentes[0] - N[9]).toFixed(2)
    let PFal =  (nutriPresentes[1] - P[9]).toFixed(2)
    let KFal =  (nutriPresentes[2] - K[9]).toFixed(2)
    let CaFal = (nutriPresentes[3] - Ca[9]).toFixed(2)
    let MgFal = (nutriPresentes[4] - Mg[9]).toFixed(2)
    let SFal =  (nutriPresentes[5] - S[9]).toFixed(2)
    let rank = 0

    let nutriFaltando = [parseFloat(NFal), parseFloat(PFal), parseFloat(KFal), parseFloat(CaFal), parseFloat(MgFal), parseFloat(SFal)]
    if(estacao == 1) {
        rank = (Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1)
    } else {
        rank = ((Math.abs(parseFloat(NFal)) + Math.abs(parseFloat(PFal)) + Math.abs(parseFloat(KFal)) + Math.abs(parseFloat(CaFal)) + Math.abs(parseFloat(MgFal)) + Math.abs(parseFloat(SFal)) + 1) * 3)
    }

    return(['Tomate', nutriFaltando, rank])
}

export const ranking = () => {

    let cafeR = cafe()
    let sojaR = soja()
    let milhoR = milho()
    let feijaoR = feijao()
    let capimR = capim()
    let sorgoR = sorgo()
    let alhoR = alho()
    let laranjaR = laranja()
    let canaR = cana()
    let tomateR = tomate()

    let ranking = [cafeR, sojaR, milhoR, feijaoR, capimR, sorgoR, alhoR, laranjaR, canaR, tomateR]
    let rankingOrdenado = 
        ranking.sort(
            (a, b) => {
                return (a[2] - b[2])
            }
        )

    return(rankingOrdenado.map(element => {
        return element[0]
    }))
}