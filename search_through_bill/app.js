const originalItems = [{
    id: 1,
    itemName: "Bread",
    price: 20
  }, {
    id: 2,
    itemName: "Butter",
    price: 50
  }, {
    id: 3,
    itemName: "Tomatoes",
    price: 30
  }, {
    id: 4,
    itemName: "Onion",
    price: 40
  }, {
    id: 5,
    itemName: "Pomegranate",
    price: 60
  }, {
    id: 6,
    itemName: "Apple",
    price: 40
  }, {
    id: 7,
    itemName: "Grapes",
    price: 30
  }, {
    id: 8,
    itemName: "Mango",
    price: 100
  }]

  function update() {
    const searchString = document.getElementById('search-bar').value
    const filteredItems = originalItems.filter(originalItems => originalItems.itemName.toLowerCase().includes(searchString.toLowerCase()))
    renderBill(filteredItems)
  }

  function appendTableRow(isHead, index, itemName, itemPrice) {
    const data_row = isHead ? "th" : "td";
    const tr = document.createElement("tr");
    const td_id = document.createElement(data_row)
    const td_name = document.createElement(data_row)
    const td_price = document.createElement(data_row)
    const id = document.createTextNode(index)
    const item_name = document.createTextNode(itemName)
    const price = document.createTextNode(itemPrice)
    td_id.appendChild(id)
    td_name.appendChild(item_name)
    td_price.appendChild(price)
    tr.appendChild(td_id)
    tr.appendChild(td_name)
    tr.appendChild(td_price)
    document.getElementsByTagName('table')[0].appendChild(tr)
  }

  function clearTable() {
    const tableNode = document.getElementsByTagName('table')[0];
    while (tableNode.firstChild) {
      tableNode.removeChild(tableNode.firstChild);
    }
  }

  function renderBill(filteredItems) {
    clearTable()
    if (filteredItems.length > 0) {
      appendTableRow(true, "S.No", "Item Name", "Price")
      filteredItems.map((item, index) => {
        appendTableRow(false, index+1, item.itemName, item.price)
      })
    } else {
      const no_items = document.createTextNode("No items found!")
      document.getElementsByTagName('table')[0].appendChild(no_items)
    }
  }
  
  renderBill(originalItems)