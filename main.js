function modelopuerta(){
    let modelo = Number(prompt(`¿Tipo de puerta?
    1-frame
    2-slim
    3-semitransparent
    4-transparent
    5-frame break out
    6-slim break out`));
    return modelo;
}
function configuracionpuerta(){
    let configuracion = Number(prompt(`¿Configuración?
    1-1 hoja
    2-1 fijo 1 hoja
    3-2 hojas
    4-2 fijos 2 hojas`));
    return configuracion;

}
let a = "";
let modeloo = Number(modelopuerta());
let configuracionn = Number(configuracionpuerta());

switch (true) {
    case modeloo == 1 && configuracionn == 1:
        a=1;
        break;
    case modeloo == 1 && configuracionn == 2:
        a=2;
        break;
    case modeloo == 1 && configuracionn == 3:
        a=3;
        break;
    case modeloo == 1 && configuracionn == 4:
        a=4;
        break;
    case modeloo == 2 && configuracionn == 1:
        a=5;
        break;
    case modeloo == 2 && configuracionn == 2:
        a=6;
        break;
    case modeloo == 2 && configuracionn == 3:
        a=7;
        break;
    case modeloo == 2 && configuracionn == 4:
        a=8;
        break;
    case modeloo == 3 && configuracionn == 1:
        a=9;
        break;
    case modeloo == 3 && configuracionn == 2:
        a=10;
        break;
    case modeloo == 3 && configuracionn == 3:
        a=11;
        break;
    case modeloo == 3 && configuracionn == 4:
        a=12;
        break;
    case modeloo == 4 && configuracionn == 1:
        a=13;
        break;
    case modeloo == 4 && configuracionn == 2:
        a=14;
        break;
    case modeloo == 4 && configuracionn == 3:
        a=15;
        break;
    case modeloo == 4 && configuracionn == 4:
        a=16;
        break;
    case modeloo == 5 && configuracionn == 2:
        a=17;
        break;
    case modeloo == 5 && configuracionn == 4:
        a=18;
        break;
    case modeloo == 6 && configuracionn == 2:
        a=19;
        break;
    case modeloo == 6 && configuracionn == 4:
        a=20;
        break;
    default:
        a=0;
        break;
}





/*
switch (modeloo) {
    case 1:
        switch (configuracionn){
            case 1:
                a = 1;
                break;
            case 2:
                a = 2;
                break;
            case 3:
                a = 3;
                break;
            case 4:
                a = 4;
                break;
            default:
                a= 0;
                break;
        }
        break;
    case 2:
        switch (configuracionn){
            case 1:
                a = 5;
                break;
            case 2:
                a = 6;
                break;
            case 3:
                a = 7;
                break;
            case 4:
                a = 8;
                break;
            default:
                a= 0;
                break;
        }
        break;
    case 3:
        switch (configuracionn){
            case 1:
                a = 9;
                break;
            case 2:
                a = 10;
                break;
            case 3:
                a = 11;
                break;
            case 4:
                a = 12;
                break;
            default:
                a= 0;
                break;
        }
        break;
    case 4:
        switch (configuracionn){
            case 1:
                a = 13;
                break;
            case 2:
                a = 14;
                break;
            case 3:
                a = 15;
                break;
            case 4:
                a = 16;
                break;
            default:
                a= 0;
                break;
        }
        break;
    default:
        a = 0;
        break;
} 
*/
/*
let a= Number(prompt(`Tipos de puerta:
frame                       (1)-1h     (2)-1f+1h     (3)-2h    (4)-2f+2h
slim                          (5)-1h     (6)-1f+1h    (7)-2h    (8)-2f+2h
semitransparent    (9)-1h   (10)-1f+1h   (11)-2h   (12)-2f+2h
transparent          (13)-1h   (14)-1+f1h   (15)-2h   (16)-2f+2h`))
*/

let aut = prompt("¿Lleva autoportante? Introduzca s / n ")
let AnchoHuecoObra = prompt("¿Cual es el ancho del HUECO DE OBRA? (en milimetros)")
let AltoHuecoObra = prompt("¿Cual es el alto del HUECO DE OBRA? (en milimetros)")
let HolguraAnchoAutoportante = 0;
let HolguraAltoAutoportante = 0;
let HolguraAnchoPuerta = 0;
let HolguraAltoPuerta = 0;
let X = 0

switch (true) {
    case a == 1 || a == 3 || a == 5 || a == 7 || a == 9 || a == 11 || a == 13 || a == 15 :
        X = 0;
        break;
    case  a == 2 || a == 4 || a == 6 || a == 8 || a == 10 || a == 12 || a == 14 || a == 16 || a == 17 || a == 18 || a == 19 || a == 20 :
        X = prompt("Cual es el valor de X?");
        break;
    default:
        X = 0;
        break;
}


/*
switch (a) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    case 11:
    case 13:
    case 15:
        X = 0;
        break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
    case 12:
    case 14:
    case 16:
        X = prompt("Cual es el valor de X?");
        break;
    default:
        X = 0;
        break;
}   
*/
function EsAutoportante() {
    const FW_autoportante = AnchoHuecoObra - HolguraAnchoAutoportante;
    const FH_autoportante = AltoHuecoObra - HolguraAltoAutoportante;
    let AnchoHueco = FW_autoportante - HolguraAnchoPuerta - 100;
    let AltoHueco = FH_autoportante - HolguraAltoPuerta - 163;
    return [AnchoHueco,AltoHueco,FW_autoportante,FH_autoportante]
}

function NoEsAutoportante() {
    let AnchoHueco = AnchoHuecoObra - HolguraAnchoPuerta;
    let AltoHueco = AltoHuecoObra - HolguraAltoPuerta;
    return [AnchoHueco,AltoHueco]
}

// FUNCIONES PUERTAS TIPO FRAME
//tipo 1
function frame1h (ancho,alto){
    let FW = ancho
    let FH = alto
    let COW = FW -22;
    let COH = FH;
    let CL = (2* COW)+297;
    return [FW, FH,COW,COH,CL,"Frame 1 hoja movil"];
}
//tipo 2
function frame1f1h (ancho,alto){
    let FW = ancho
    let FH = alto
    let COW = (FW -88-X)/2;
    let COH = FH;
    let CL = FW+152;
    return [FW, FH,COW,COH,CL,"Frame 1 fijo + 1 hoja movil"];
}
//tipo 3
function frame2h (ancho,alto){
    let FW = ancho
    let FH = alto
    let COW = FW -22;
    let COH = FH;
    let CL = (2* COW)+297;
    return [FW, FH,COW,COH,CL,"Frame 2 hojas moviles"];
}
//tipo4
function frame2f2h (ancho,alto){
    let FW = ancho
    let FH = alto
    let COW = (FW -160-(2*X))/2;
    let COH = FH;
    let CL = FW;
    return [FW, FH,COW,COH,CL,"Frame 2 fijos + 2 hojas moviles"];
}

//tipo5
function slim1h (ancho,alto){
    let FW = ancho
    let FH = alto
    let COW = FW -7;
    let COH = FH;
    let CL = (2* COW)+195;
    return [FW, FH,COW,COH,CL,"Slim 1 hoja movil"];
}
//tipo6
function slim1f1h (ancho,alto){
    let FW = ancho
    let FH = alto
    let COW = (FW -37-X)/2;
    let COH = FH-50;
    let CL = FW+110;
    return [FW, FH,COW,COH,CL,"Slim 1 fijo + 1 hoja movil"];
}
//tipo7
function slim2h (ancho,alto){
    let FW = ancho
    let FH = alto
    let COW = FW -4;
    let COH = FH;
    let CL = (2* COW)+195;
    return [FW, FH,COW,COH,CL,"Slim 2 hojas moviles"];
}
//tipo8
function slim2f2h (ancho,alto){
    let FW = ancho
    let FH = alto
    let COW = (FW/2)-32-X;
    let COH = FH-50;
    let CL = FW;
    return [FW, FH,COW,COH,CL,"Slim 2 fijos + 2 hojas moviles"];
}

//tipo9
function semitransparent1h (ancho,alto){
    let FW = ancho
    let FH = alto
    let COW = FW;
    let COH = FH;
    let CL = (2* COW)+231;
    return [FW, FH,COW,COH,CL,"Semitransparent 1 hoja movil"];
}
//tipo10
function semitransparent1f1h (ancho,alto){
    let FW = ancho
    let FH = alto
    let COW = (FW-50-X)/2;
    let COH = FH;
    let CL = FW+130;
    return [FW, FH,COW,COH,CL,"Semitransparent 1 fijo + 1 hoja movil"];
}
//tipo11
function semitransparent2h (ancho,alto){
    let FW = ancho
    let FH = alto
    let COW = FW;
    let COH = FH;
    let CL = (2* COW)+231;
    return [FW, FH,COW,COH,CL,"Semitransparent 2 hojas moviles"];
}
//tipo12
function semitransparent2f2h (ancho,alto){
    let FW = ancho
    let FH = alto
    let COW = (FW -100-(2*X))/2;
    let COH = FH;
    let CL = FW;
    return [FW, FH,COW,COH,CL,"Semitransparent 2 fijos + 2 hojas moviles"];
}


//tipo13
function transparent1h (ancho,alto){
    let FW = ancho
    let FH = alto
    let COW = FW;
    let COH = FH;
    let CL = (2* COW)+231;
    return [FW, FH,COW,COH,CL,"Transparent 1 hoja movil"];
}
//tipo14
function transparent1f1h (ancho,alto){
    let FW = ancho
    let FH = alto
    let COW = (FW-50-X)/2;
    let COH = FH;
    let CL = FW+130;
    return [FW, FH,COW,COH,CL,"Transparent 1 fijo + 1 hoja movil"];
}
//tipo15
function transparent2h (ancho,alto){
    let FW = ancho
    let FH = alto
    let COW = FW;
    let COH = FH;
    let CL = (2* COW)+231;
    return [FW, FH,COW,COH,CL,"Transparent 2 hojas moviles"];
}
//tipo16
function transparent2f2h (ancho,alto){
    let FW = ancho
    let FH = alto
    let COW = (FW -100-(2*X))/2;
    let COH = FH;
    let CL = FW;
    return [FW, FH,COW,COH,CL,"Transparent 2 fijos + 2 hojas moviles"];
}

//tipo17
function framebreakout1f1h (ancho,alto){
    let FW = ancho
    let FH = alto
    let COW = (FW -127-X)/2;
    let COH = FH-55;
    let CL = FW+113;
    return [FW, FH,COW,COH,CL,"Frame Break Out 1 fijo + 1 hoja movil"];
}

//tipo18
function framebreakout2f2h (ancho,alto){
    let FW = ancho
    let FH = alto
    let COW = (FW -160-(2*X))/2;
    let COH = FH-55;
    let CL = FW;
    return [FW, FH,COW,COH,CL,"Frame Break Out 2 fijos + 2 hojas moviles"];
}

//tipo19
function slimbreakout1f1h (ancho,alto){
    let FW = ancho
    let FH = alto
    let COW = (FW -67-X)/2;
    let COH = FH-44;
    let CL = FW+102;
    return [FW, FH,COW,COH,CL,"Slim Break Out 1 fijo + 1 hoja movil"];
}

//tipo20
function slimbreakout2f2h (ancho,alto){
    let FW = ancho
    let FH = alto
    let COW = (FW -104-(2*X))/2;
    let COH = FH-44;
    let CL = FW;
    return [FW, FH,COW,COH,CL,"Slim Break Out 2 fijos + 2 hojas moviles"];
}

// Selección del tipo de puerta
// Aplica la función en función del tipo de puerta
function bypass(rr,yy,tipoo){
    switch (tipoo) {
        case 1:
            return frame1h(rr,yy)
        case 2:
            return frame1f1h(rr,yy)
        case 3:
            return frame2h(rr,yy)
        case 4:   
            return frame2f2h(rr,yy)
        case 5:
            return slim1h(rr,yy)
        case 6:
            return slim1f1h(rr,yy)
        case 7:
            return slim2h(rr,yy)
        case 8:   
            return slim2f2h(rr,yy)
        case 9:
            return semitransparent1h(rr,yy)
        case 10:
            return semitransparent1f1h(rr,yy)
        case 11:
            return semitransparent2h(rr,yy)
        case 12:   
            return semitransparent2f2h(rr,yy)
        case 13:
            return transparent1h(rr,yy)
        case 14:
            return transparent1f1h(rr,yy)
        case 15:
            return transparent2h(rr,yy)
        case 16:   
            return transparent2f2h(rr,yy)
        case 17:   
            return framebreakout1f1h(rr,yy)
        case 18:   
            return framebreakout2f2h(rr,yy)
        case 19:   
            return slimbreakout1f1h(rr,yy)
        case 20:   
            return slimbreakout2f2h(rr,yy)
        default:
            document.body.innerHTML ="revise los datos datos"
    }   
}

// Devuelve los valores
switch (aut) {
    case "S":
    case "s":
        HolguraAnchoAutoportante = prompt("¿Que holgura quieres aplicar al ANCHO del AUTOPORTANTE? (en milimetros)");
        HolguraAltoAutoportante = prompt("¿Que holgura quieres aplicar al ALTO del AUTOPORTANTE? (en milimetros)");
        HolguraAnchoPuerta = prompt("¿Que holgura quieres aplicar al ANCHO de la PUERTA? (en milimetros)");
        HolguraAltoPuerta = prompt("¿Que holgura quieres aplicar al ALTO de la PUERTA? (en milimetros)");
        document.body.innerHTML = `
        <h3>Calculo de medidas puertas</h3>
        <h4>Puerta tipo ${bypass(EsAutoportante()[0],EsAutoportante()[1],a)[5]}<br>Ancho hueco: ${AnchoHuecoObra} mm | Alto hueco: ${AltoHuecoObra} mm<br></h4>
        <p>FW Autoportante: ${EsAutoportante()[2]} mm Holgura: ${HolguraAnchoAutoportante} mm<br>
        FH Autoportante: ${EsAutoportante()[3]} mm Holgura: ${HolguraAltoAutoportante} mm<br><br>
        FW =  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp${bypass(EsAutoportante()[0],EsAutoportante()[1],a)[0]} mm Holgura: ${HolguraAnchoPuerta} mm<br>
        FH =  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp${bypass(EsAutoportante()[0],EsAutoportante()[1],a)[1]} mm Holgura ${HolguraAltoPuerta} mm<br>
        COW = &nbsp;&nbsp${bypass(EsAutoportante()[0],EsAutoportante()[1],a)[2]} mm<br>
        COH=  &nbsp;&nbsp;&nbsp;&nbsp${bypass(EsAutoportante()[0],EsAutoportante()[1],a)[3]} mm<br>
        CL=   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp${bypass(EsAutoportante()[0],EsAutoportante()[1],a)[4]} mm<br>
        X =   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp${X} mm</p>`
        break;
    default:
        HolguraAnchoPuerta = prompt("¿Que holgura quieres aplicar al ANCHO de la PUERTA? (en milimetros)");
        HolguraAltoPuerta = prompt("¿Que holgura quieres aplicar al ALTO de la PUERTA? (en milimetros)");
        document.body.innerHTML = `
        <h3>Calculo de medidas puertas</h3>
        <h4>Puerta tipo ${bypass(NoEsAutoportante()[0],NoEsAutoportante()[1],a)[5]}<br>Ancho hueco: ${AnchoHuecoObra} mm | Alto hueco: ${AltoHuecoObra} mm<br></h4>
        <p>FW =  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp${bypass(NoEsAutoportante()[0],NoEsAutoportante()[1],a)[0]} mm Holgura: ${HolguraAnchoPuerta} mm<br>
        FH =  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp${bypass(NoEsAutoportante()[0],NoEsAutoportante()[1],a)[1]} mm Holgura ${HolguraAltoPuerta} mm<br>
        COW = &nbsp;&nbsp${bypass(NoEsAutoportante()[0],NoEsAutoportante()[1],a)[2]} mm<br>
        COH=  &nbsp;&nbsp;&nbsp;&nbsp${bypass(NoEsAutoportante()[0],NoEsAutoportante()[1],a)[3]} mm<br>
        CL=   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp${bypass(NoEsAutoportante()[0],NoEsAutoportante()[1],a)[4]} mm<br>
        X =   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp${X} mm</p>`;
  };
