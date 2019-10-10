module.exports = function zeros(expression) {
  // your solution
    function factorialZerro(ch) {
        var f=1;
        var z=0;
        for (i=0;i<ch;i++){
            f=BigInt(f)*BigInt(ch-i);
        }
        // f=f.toString();
        // l=f.length;
        // for (u=l-1;u>0;u--){
        //     if (f[u]==='0'){
        //         z=z+1;
        //     }else {
        //         break
        //     }
        // }
        return(f)
    }
    function doublefactorialNotEven(ch3){
        var f=1;
        for (i=1; i<ch3;i=i+2){
            f=BigInt(f)*BigInt(ch3-i+1);
        }
        return(f)
    }
    function doublefactorialevenZerro(ch1){
        var f=1;
        var z=0;
        for (i=0; i<ch1;i=i+2){
            f=BigInt(f)*BigInt(ch1-i);
        }
        //f=f.toString();
        //l=f.length;
        // for (u=l-1;u>0;u--){
        //     if (f[u]==='0'){
        //         z=z+1;
        //     }else {
        //         break
        //     }
        // }
        return(f)
    }
    a=expression;
    k=0;
    o=1;
    f=1;
    expl=0;
    mult=0;
    s=0;
    c='';
    z=0;
    for (m=0; m<=a.length-1;m++) {
        for (j = m; j <= a.length - 1; j++) {
            if (a[j] != '!' && a[j] != '*') {
                c = c + a[j];
                m++;
            } else {

                break;
            }
        }
        if (c!=''){
            if ((a[j]==='!')&&(a[j+1]==='!')){
                expl=2;
            }else {
                expl=1
            }
        }
        if (c!==''){
            if ((expl===2) ){
                if (c%2===0){
                    o=BigInt(o)*BigInt(doublefactorialevenZerro(c));
                }else {
                    o=BigInt(o)*BigInt(doublefactorialNotEven(c));
                }
            }
            if(expl===1) {
                o=BigInt(o)*BigInt(factorialZerro(c));
            }
        }
        c='';
        expl=0;
    }
    k=0;
    o=o.toString();
    for (y=o.length-1;y>0;y--){
        if (o[y]==='0'){
            k++;
        }else {
            break
        }
    }
    return(k);
}
