const toolTip = function () {
    let prompts = document.querySelectorAll("span[title]");
    if(prompts.length == 0) return;

    const show = function(){
        let valueAttribute = this.getAttribute("title");
        let parentItem =this.closest("span");
        parentItem.removeAttribute("title");

        let tooltip = document.createElement("div");
        tooltip.innerHTML = valueAttribute;// почему, если в 6 строке вместо this будет event.target, то значение null?
        tooltip.classList.add("div_tooltip");
        document.body.append(tooltip);
        
        let x = this.offsetLeft;
        let y = this.offsetTop - tooltip.offsetHeight -5;
        
        tooltip.style.top = y + "px";
        tooltip.style.left = x + "px";
    };

    const hide = function(){
        let span = this;
        let toolTipsList = document.querySelectorAll(".div_tooltip");
        
        toolTipsList.forEach(function(elem){
            let getText = elem.innerHTML;
            span.setAttribute("title", getText);
            elem.remove();
        });
    };
    
    prompts.forEach(function(span) {
        span.addEventListener("mouseover", show);
        span.addEventListener("mouseleave", hide);
    });
};
window.addEventListener("load", toolTip);