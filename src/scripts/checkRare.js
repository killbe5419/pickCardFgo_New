export default function checkRare(num) {
    let output;
    if(num === 5) {
        output = { color: "orange" };
    }
    else if(num === 4) {
        output = { color: "purple" };
    } else {
        output = { color: "blue" };
    }
    return output;
}