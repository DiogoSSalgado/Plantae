const N =  [2.75, 5.00, 3.00, 2.45, 1.45, 2.60, 2.75, 0, 2.10, 2.83]
const P =  [1.70, 0.35, 0.27, 0.30, 0.20, 0.44, 0.14, 0, 0.21, 0.40]
const K =  [2.50, 2.10, 2.50, 2.30, 2.10, 2.15, 1.40, 0, 1.31, 2.54]
const Ca = [1.75, 1.25, 0.20, 1.95, 0.45, 1.07, 4.25, 0, 0.47, 0.90]
const Mg = [0.40, 0.70, 0.23, 0.25, 0.55, 0.32, 0.42, 0, 0.21, 0.38]
const S =  [0.17, 0.30, 0.18, 0.13, 0.17, 0.38, 0.25, 0, 0.51, 0.44]

var nutriPresentes = [0, 0, 0, 0, 0, 0]

export const cafe = () => {

    let NFal = (nutriPresentes[0] - N[0]).toFixed(2)
    let PFal = (nutriPresentes[1] - P[0]).toFixed(2)
    let KFal = (nutriPresentes[2] - K[0]).toFixed(2)
    let CaFal = (nutriPresentes[3] - Ca[0]).toFixed(2)
    let MgFal = (nutriPresentes[4] - Mg[0]).toFixed(2)
    let SFal = (nutriPresentes[5] - S[0]).toFixed(2)

    let nutriFaltando = [parseFloat(NFal), parseFloat(PFal), parseFloat(KFal), parseFloat(CaFal), parseFloat(MgFal), parseFloat(SFal)]

    return(nutriFaltando)

}

export const soja = () => {

    let NFal = (nutriPresentes[0] - N[1]).toFixed(2)
    let PFal = (nutriPresentes[1] - P[1]).toFixed(2)
    let KFal = (nutriPresentes[2] - K[1]).toFixed(2)
    let CaFal = (nutriPresentes[3] - Ca[1]).toFixed(2)
    let MgFal = (nutriPresentes[4] - Mg[1]).toFixed(2)
    let SFal = (nutriPresentes[5] - S[1]).toFixed(2)

    let nutriFaltando = [parseFloat(NFal), parseFloat(PFal), parseFloat(KFal), parseFloat(CaFal), parseFloat(MgFal), parseFloat(SFal)]

    return(nutriFaltando)

}

export const milho = () => {

    let NFal = (nutriPresentes[0] - N[2]).toFixed(2)
    let PFal = (nutriPresentes[1] - P[2]).toFixed(2)
    let KFal = (nutriPresentes[2] - K[2]).toFixed(2)
    let CaFal = (nutriPresentes[3] - Ca[2]).toFixed(2)
    let MgFal = (nutriPresentes[4] - Mg[2]).toFixed(2)
    let SFal = (nutriPresentes[5] - S[2]).toFixed(2)

    let nutriFaltando = [parseFloat(NFal), parseFloat(PFal), parseFloat(KFal), parseFloat(CaFal), parseFloat(MgFal), parseFloat(SFal)]

    return(nutriFaltando)

}

export const feijao = () => {

    let NFal = (nutriPresentes[0] - N[3]).toFixed(2)
    let PFal = (nutriPresentes[1] - P[3]).toFixed(2)
    let KFal = (nutriPresentes[2] - K[3]).toFixed(2)
    let CaFal = (nutriPresentes[3] - Ca[3]).toFixed(2)
    let MgFal = (nutriPresentes[4] - Mg[3]).toFixed(2)
    let SFal = (nutriPresentes[5] - S[3]).toFixed(2)

    let nutriFaltando = [parseFloat(NFal), parseFloat(PFal), parseFloat(KFal), parseFloat(CaFal), parseFloat(MgFal), parseFloat(SFal)]

    return(nutriFaltando)

}

export const capim = () => {
    let NFal = (nutriPresentes[0] - N[4]).toFixed(2)
    let PFal = (nutriPresentes[1] - P[4]).toFixed(2)
    let KFal = (nutriPresentes[2] - K[4]).toFixed(2)
    let CaFal = (nutriPresentes[3] - Ca[4]).toFixed(2)
    let MgFal = (nutriPresentes[4] - Mg[4]).toFixed(2)
    let SFal = (nutriPresentes[5] - S[4]).toFixed(2)

    let nutriFaltando = [parseFloat(NFal), parseFloat(PFal), parseFloat(KFal), parseFloat(CaFal), parseFloat(MgFal), parseFloat(SFal)]

    return(nutriFaltando)
}

export const sorgo = () => {
    let NFal = (nutriPresentes[0] - N[5]).toFixed(2)
    let PFal = (nutriPresentes[1] - P[5]).toFixed(2)
    let KFal = (nutriPresentes[2] - K[5]).toFixed(2)
    let CaFal = (nutriPresentes[3] - Ca[5]).toFixed(2)
    let MgFal = (nutriPresentes[4] - Mg[5]).toFixed(2)
    let SFal = (nutriPresentes[5] - S[5]).toFixed(2)

    let nutriFaltando = [parseFloat(NFal), parseFloat(PFal), parseFloat(KFal), parseFloat(CaFal), parseFloat(MgFal), parseFloat(SFal)]

    return(nutriFaltando)
}

export const laranja = () => {
    let NFal = (nutriPresentes[0] - N[6]).toFixed(2)
    let PFal = (nutriPresentes[1] - P[6]).toFixed(2)
    let KFal = (nutriPresentes[2] - K[6]).toFixed(2)
    let CaFal = (nutriPresentes[3] - Ca[6]).toFixed(2)
    let MgFal = (nutriPresentes[4] - Mg[6]).toFixed(2)
    let SFal = (nutriPresentes[5] - S[6]).toFixed(2)

    let nutriFaltando = [parseFloat(NFal), parseFloat(PFal), parseFloat(KFal), parseFloat(CaFal), parseFloat(MgFal), parseFloat(SFal)]

    return(nutriFaltando)
}

export const alho = () => {
    let NFal = (nutriPresentes[0] - N[7]).toFixed(2)
    let PFal = (nutriPresentes[1] - P[7]).toFixed(2)
    let KFal = (nutriPresentes[2] - K[7]).toFixed(2)
    let CaFal = (nutriPresentes[3] - Ca[7]).toFixed(2)
    let MgFal = (nutriPresentes[4] - Mg[7]).toFixed(2)
    let SFal = (nutriPresentes[5] - S[7]).toFixed(2)

    let nutriFaltando = [parseFloat(NFal), parseFloat(PFal), parseFloat(KFal), parseFloat(CaFal), parseFloat(MgFal), parseFloat(SFal)]

    return(nutriFaltando)
}

export const cana = () => {
    let NFal = (nutriPresentes[0] - N[8]).toFixed(2)
    let PFal = (nutriPresentes[1] - P[8]).toFixed(2)
    let KFal = (nutriPresentes[2] - K[8]).toFixed(2)
    let CaFal = (nutriPresentes[3] - Ca[8]).toFixed(2)
    let MgFal = (nutriPresentes[4] - Mg[8]).toFixed(2)
    let SFal = (nutriPresentes[5] - S[8]).toFixed(2)

    let nutriFaltando = [parseFloat(NFal), parseFloat(PFal), parseFloat(KFal), parseFloat(CaFal), parseFloat(MgFal), parseFloat(SFal)]

    return(nutriFaltando)
}

export const tomate = () => {
    let NFal = (nutriPresentes[0] - N[9]).toFixed(2)
    let PFal = (nutriPresentes[1] - P[9]).toFixed(2)
    let KFal = (nutriPresentes[2] - K[9]).toFixed(2)
    let CaFal = (nutriPresentes[3] - Ca[9]).toFixed(2)
    let MgFal = (nutriPresentes[4] - Mg[9]).toFixed(2)
    let SFal = (nutriPresentes[5] - S[9]).toFixed(2)

    let nutriFaltando = [parseFloat(NFal), parseFloat(PFal), parseFloat(KFal), parseFloat(CaFal), parseFloat(MgFal), parseFloat(SFal)]

    return(nutriFaltando)
}