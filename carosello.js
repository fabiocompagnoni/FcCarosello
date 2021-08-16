/**
 * @author Fabio Compagnoni
 * @version 1.0
 */

class FcCarosello{
    fotoPerSlide;
    immaginiPath=Array();
    repeatFoto;

    /*costruttore*/
    /**
     * @param nFoto numero delle foto da inserire in una slide, settare a false se si vuole che sia responsive
     * @param arrayPath array di stringhe che contiene i path delle immagini da mostrare, possono essere relativi in base a questo file oppure assoluti
     * @param repeatFoto definisce se le foto devono ripetersi o no (bool)
     */
    constructor(nFoto, arrayPath, repeatFoto) {
        if(nFoto==false)
            this.fotoPerSlide=false;
        else
            this.fotoPerSlide=parseInt(nFoto);
        this.immaginiPath=arrayPath;
        this.repeatFoto=Boolean(repeatFoto);
    }
    //construttore anonimo
    constructor(immaginiPath)
    {
        fotoPerSlide=false;
        this.immaginiPath=immaginiPath;
        repeatFoto=true;
    }
    /**
     * @version 1.0
     * @description Metodo che inizializza il carosello e lo mostra nel file html
     */
    init(){

    }
}