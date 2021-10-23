//Cálculo medidas para puerta descontando autoportante:
var Aut =prompt("¿Lleva autoportante S/N?");
var Tipo=prompt('¿Tipo de puerta? 1-FRAME / 2-SLIM / 3-SEMITRANSPARENT / 4-TRANSPARENT : ');
//var datos = document.getElementById("datos");

while (Tipo!='1' & Tipo!='2' & Tipo!='3' & Tipo!='4'){
    var Tipo=prompt('¿Tipo de puerta? 1-FRAME / 2-SLIM / 3-SEMITRANSPARENT / 4-TRANSPARENT : ')
}

if (Aut=='S' || Aut=='s'){
    
    var a=4000
    var b=2500
    var c=5
    var d=4
    var e=5
    var f=4
    var X=200
    
    /*
    var a=Number(prompt('¿Cual es el ancho de HUECO que disponemos <----->? '))
    var b=Number(prompt('¿Cual es la altura de HUECO que disponemos |^^? '))
    var c=Number(prompt('¿Que holgura de HUECO queremos en ancho <--||-->? '))
    var d=Number(prompt('¿Que holgura de HUECO queremos en alto |^^? '))
    var e=Number(prompt('¿Que holgura aplicamos para la PUERTA en ancho <--||-->? '))
    var f=Number(prompt('¿Que holgura aplicamos para la PUERTA en alto |^^? '))
    var X=Number(prompt('Valor de X? '))
    
    */
    var separador = ("=".repeat(52))
    document.write("")
    document.write("=".repeat(52))
    document.write('MEDIDAS PARA PEDIDO CON AUTOPORTANTE:')
    document.write("=".repeat(52))

    var FWAut=a-c
    var FHAut=b-d
    var FWPuert=a-c-e-100
    var FHPuert=b-d-f-163

    document.write(`
    <br/>Ancho autoportante   &nbsp FW AUTOPORTANTE= ${FWAut} mm  &nbsp (${a} - ${c})
    <br/>Alto autoportante    &nbsp FH AUTOPORTANTE= ${FHAut} mm  &nbsp (${b} - ${d})
    <br/>${separador}
    <br/>Ancho puerta &nbsp FW PUERTA= ${FWPuert} mm      &nbsp (${a} - ${c} - ${e} - 100)
    <br/>Alto puerta &nbsp FH PUERTA= ${FHPuert} mm &nbsp (${b} - ${d} - ${f}- 163)
    `)

}



/*


    
    


    

    
    
    
else:
    a=Number(prompt('¿Cual es el ancho de HUECO que disponemos <----->? '))
    b=Number(prompt('¿Cual es la altura de HUECO que disponemos |^^? '))
    e=Number(prompt('¿Que holgura aplicamos para la PUERTA en ancho <--||-->? '))
    f=Number(prompt('¿Que holgura aplicamos para la PUERTA en alto |^^? '))
    X=Number(prompt('Valor de X? '))
    # a=4000
    # b=2500
    # c=5
    # d=4
    # e=5
    # f=4
    # X=200    
    document.write("")
    document.write(52*"=")
    document.write('MEDIDAS PARA PEDIDO SIN AUTOPORTANTE:')
    document.write(52*"=")
    FWPuert=a-e
    document.write('Ancho puerta  FW PUERTA= '+str(FWPuert)+' mm'+' ('+str(a)+'-'+str(e)+')')
    FHPuert=b-f
    document.write('Alto puerta FH PUERTA= '+str(FHPuert)+' mm'+' ('+str(b)+'-'+str(f)+')')
    
    

if Tipo=='1':
    document.write("")
    document.write(52*"*")       
    #MEDIDAS PARA FRAME 2 HOJAS
    document.write('MEDIDAS PARA FRAME 2 HOJAS: ')
    COW=FWPuert-22
    document.write('COW='+str(COW)+' mm')
    CL=(2*COW)+297
    document.write('CL='+str(CL)+' mm')
    COH=FHPuert
    document.write('COH='+str(COH)+' mm')
    document.write("")
    document.write(52*"*")
    #MEDIDAS PARA FRAME 1 HOJA
    document.write('MEDIDAS PARA FRAME 1 HOJA')
    COW=FWPuert-22
    document.write('COW='+str(COW)+' mm')
    CL=(2*COW)+297
    document.write('CL='+str(CL)+' mm')
    COH=FHPuert
    document.write('COH='+str(COH)+' mm')
    document.write("")
    document.write(52*"*")
    #MEDIDAS PARA FRAME 2 FIJOS+2 MOVILES
    document.write('MEDIDAS PARA FRAME 2 FIJOS + 2 MOVILES: ')
    COW=(FWPuert-160-(2*X))/2
    document.write('COW='+str(COW)+' mm')
    CL=FWPuert
    document.write('CL='+str(CL)+' mm')
    COH=FHPuert
    document.write('COH='+str(COH)+' mm')
    document.write('X='+str(X)+'mm')
    document.write("")
    document.write(52*"*")
    #MEDIDAS PARA FRAME 1 FIJO+1 MOVIL
    document.write('MEDIDAS PARA FRAME 1 FIJO+1 MOVIL: ')
    COW=(FWPuert-88-X)/2
    document.write('COW='+str(COW)+' mm')
    CL=FWPuert+152
    document.write('CL='+str(CL)+' mm')
    COH=FHPuert
    document.write('COH='+str(COH)+' mm')
    document.write('X='+str(X)+'mm')
    document.write("")
    document.write(52*"=")
    
    
    
    
elif Tipo=='2':    
    document.write("")
    document.write(52*"*")    
    #MEDIDAS PARA SLIM 2 HOJAS
    document.write('MEDIDAS PARA SLIM 2 HOJAS: ')
    COW=FWPuert-4
    document.write('COW='+str(COW)+' mm')
    CL=(2*COW)+195
    document.write('CL='+str(CL)+' mm')
    COH=FHPuert
    document.write('COH='+str(COH)+' mm')
    document.write("")
    document.write(52*"*")
    #MEDIDAS PARA SLIM 1 HOJA
    document.write('MEDIDAS PARA SLIM 1 HOJA')
    COW=FWPuert-7
    document.write('COW='+str(COW)+' mm')
    CL=(2*COW)+195
    document.write('CL='+str(CL)+' mm')
    COH=FHPuert
    document.write('COH='+str(COH)+' mm')
    document.write("")
    document.write(52*"*")
    #MEDIDAS PARA SLIM 2 FIJOS+2 MOVILES
    document.write('MEDIDAS PARA SLIM 2 FIJOS + 2 MOVILES: ')
    COW=(FWPuert/2)-32-X
    document.write('COW='+str(COW)+' mm')
    CL=FWPuert
    document.write('CL='+str(CL)+' mm')
    COH=FHPuert-50
    document.write('COH='+str(COH)+' mm')
    document.write('X='+str(X)+'mm')
    document.write("")
    document.write(52*"*")
    #MEDIDAS PARA SLIM 1 FIJO+1 MOVIL
    document.write('MEDIDAS PARA SLIM 1 FIJO+1 MOVIL: ')
    COW=(FWPuert-37-X)/2
    document.write('COW='+str(COW)+' mm')
    CL=FWPuert+110
    document.write('CL='+str(CL)+' mm')
    COH=FHPuert-50
    document.write('COH='+str(COH)+' mm')
    document.write('X='+str(X)+'mm')
    document.write("")
    document.write(52*"=")





elif Tipo=='3':
    document.write("")
    document.write(52*"*")    
    #MEDIDAS PARA SEMITRANSPARENT 2 HOJAS
    document.write('MEDIDAS PARA SEMITRANSPARENT 2 HOJAS: ')
    COW=FWPuert
    document.write('COW='+str(COW)+' mm')
    CL=(2*COW)+231
    document.write('CL='+str(CL)+' mm')
    COH=FHPuert
    document.write('COH='+str(COH)+' mm')
    document.write("")
    document.write(52*"*")
    #MEDIDAS PARA SEMITRANSPARENT 1 HOJA
    document.write('MEDIDAS PARA SEMITRANSPARENT 1 HOJA')
    COW=FWPuert
    document.write('COW='+str(COW)+' mm')
    CL=(2*COW)+231
    document.write('CL='+str(CL)+' mm')
    COH=FHPuert
    document.write('COH='+str(COH)+' mm')
    document.write("")
    document.write(52*"*")
    #MEDIDAS PARA SEMITRANSPARENT 2 FIJOS+2 MOVILES
    document.write('MEDIDAS PARA SEMITRANSPARENT 2 FIJOS + 2 MOVILES: ')
    COW=(FWPuert-100-(2*X))/2
    document.write('COW='+str(COW)+' mm')
    CL=FWPuert
    document.write('CL='+str(CL)+' mm')
    COH=FHPuert
    document.write('COH='+str(COH)+' mm')
    document.write('X='+str(X)+'mm')
    document.write("")
    document.write(52*"*")
    #MEDIDAS PARA SEMITRANSPARENT1 FIJO+1 MOVIL
    document.write('MEDIDAS PARA SEMITRANSPARENT 1 FIJO+1 MOVIL: ')
    COW=(FWPuert-50-X)/2
    document.write('COW='+str(COW)+' mm')
    CL=FWPuert+130
    document.write('CL='+str(CL)+' mm')
    COH=FHPuert
    document.write('COH='+str(COH)+' mm')
    document.write('X='+str(X)+'mm')
    document.write("")
    document.write(52*"=")





elif Tipo=='4':
    document.write("")
    document.write(52*"*")    
    #MEDIDAS PARA TRANSPARENT 2 HOJAS
    document.write('MEDIDAS PARA TRANSPARENT 2 HOJAS: ')
    COW=FWPuert
    document.write('COW='+str(COW)+' mm')
    CL=(2*COW)+231
    document.write('CL='+str(CL)+' mm')
    COH=FHPuert
    document.write('COH='+str(COH)+' mm')
    document.write("")
    document.write(52*"*")
    #MEDIDAS PARA TRANSPARENT 1 HOJA
    document.write('MEDIDAS PARA TRANSPARENT 1 HOJA')
    COW=FWPuert
    document.write('COW='+str(COW)+' mm')
    CL=(2*COW)+231
    document.write('CL='+str(CL)+' mm')
    COH=FHPuert
    document.write('COH='+str(COH)+' mm')
    document.write("")
    document.write(52*"*")
    #MEDIDAS PARA TRANSPARENT 2 FIJOS+2 MOVILES
    document.write('MEDIDAS PARA TRANSPARENT 2 FIJOS + 2 MOVILES: ')
    COW=(FWPuert-100-(2*X))/2
    document.write('COW='+str(COW)+' mm')
    CL=FWPuert
    document.write('CL='+str(CL)+' mm')
    COH=FHPuert
    document.write('COH='+str(COH)+' mm')
    document.write('X='+str(X)+'mm')
    document.write("")
    document.write(52*"*")
    #MEDIDAS PARA TRANSPARENT1 FIJO+1 MOVIL
    document.write('MEDIDAS PARA TRANSPARENT 1 FIJO+1 MOVIL: ')
    COW=(FWPuert-50-X)/2
    document.write('COW='+str(COW)+' mm')
    CL=FWPuert+130
    document.write('CL='+str(CL)+' mm')
    COH=FHPuert
    document.write('COH='+str(COH)+' mm')
    document.write('X='+str(X)+'mm')
    document.write("")
    document.write(52*"=")
    */
