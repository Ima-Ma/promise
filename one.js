fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => {
    let tableData = "";
    data.forEach(product => {
        tableData += `
            <tr>
            <td>${product.title}</td>
            <td>${product.description}</td>
            <td>${product.price}</td>
            <tr/>;
        `
    });
    document.getElementById('table-body').innerHTML = tableData;
})
.catch(error => {
    console.error("error fatching data:" , error)
})