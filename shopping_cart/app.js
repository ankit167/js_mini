function insertItem() {

    let table= document.getElementsByTagName("table")[0];
    if(!document.getElementById("item-name-input").value){
        return;
    }
    if(!document.getElementById("item-price-input").value){
        return ;
    }
    let data = {
        val1: document.getElementById("item-name-input").value,
        val2: document.getElementById("item-price-input").value,
    };
    document.getElementById("item-name-input").value = null;
    document.getElementById("item-price-input").value = null;

    insert(table,data);
}

function insert(table, data){
    let row = table.insertRow(table.rows.length-1);
    let cell = row.insertCell();

    let sr=Number(table.rows.length)-Number(2);
    let text = document.createTextNode(sr);
    cell.appendChild(text);



    let cell1 = row.insertCell();
    cell1.setAttribute("data-ns-test", "item-name");
    let text1 = document.createTextNode(data.val1);
    cell1.appendChild(text1);

    let cell2 = row.insertCell();
    cell2.setAttribute("data-ns-test", "item-price");
    let text2 = document.createTextNode(data.val2);
    cell2.appendChild(text2);


    let last_row = table.rows[table.rows.length -1];
    last_row.cells[1].innerText = Number(last_row.cells[1].innerText)+ Number(data.val2);

}
