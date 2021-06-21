function $g(selector) {
    //判斷是否為id selector
    if (selector.includes('#') && !selector.includes(' ')) {
        //回傳Element
        return document.querySelector(selector);
    }
    //回傳NodeList集合
    let nodelist = document.querySelectorAll(selector);
    return nodelist.length == 1 ? nodelist[0] : nodelist;
}
function $c(element){
    return document.createElement(element);
}
function $cc(element, text) {
    let el = document.createElement(element);
    if (text !== null && text !== undefined && text.length > 0) {
        el.innerText = text;
    }
    return el;
}
export { $g, $c, $cc }