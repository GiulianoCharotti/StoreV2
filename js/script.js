function type_of_product(){
    var type_product = document.getElementById('type_product');
    var text_type = type_product.options[type_product.selectedIndex].text;
    return text_type;
}

function create_inputs(){
    let text = type_of_product();
    
    var input_text = document.createElement("INPUT");
    input_text.setAttribute("type","text");
    document.body.appendChild(input_text)
    var input_submit = document.createElement("INPUT");
    input_submit.setAttribute("type","submit");
    input_submit.setAttribute("value","submit");
    document.body.appendChild(input_submit);
}

