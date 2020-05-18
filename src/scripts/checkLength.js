export default function checkLength(str){
    const change = (str,key,limit) => {
        let out = [];
        out.push(str);
        const a = str.split(key);
        for(let i=0;i<a.length -1; i++) {
            let arr = out[i].toString().split(key);
            arr.pop();
            out.push(arr.join(key));
        }
        let select;
        for(let i=0;i<out.length;i++) {
            const tmp = out[i];
            if(tmp.length < limit) {
                select = tmp;
                break;
            }
        }
        return select;
    }
    let out;
    if(str.indexOf("・") > -1 && str.indexOf("〔") > -1) {
        const tmp = change(str,"〔",10);
        out = change(tmp, "・", 10);
    }
    else if(str.indexOf("・") > -1 && str.indexOf("〔") === -1) {
        out = change(str,"・",10);
    }
    else if (str.indexOf("・") === -1 && str.indexOf("〔") > -1) {
        out = change(str,"〔",10);
    } else {
        out = str.split(str[10])[0];
    }
    return out;
}