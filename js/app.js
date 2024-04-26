const products = [
    { name: "вудочка 2,4м", price: "294", barcode: "", category: "Рибалка" },
    { name: "вудочка 2,7м", price: "274", barcode: "", category: "Рибалка" },
    { name: "котушка кобра 640", price: "328", barcode: "", category: "Рибалка" },
    { name: "котушка кобра 540", price: "318", barcode: "", category: "Рибалка" },
    { name: "котушка 200", price: "184", barcode: "", category: "Рибалка" },
    { name: "лєска деш в асорт", price: "56", barcode: "", category: "Рибалка" },
    { name: "лєска флюрокарбон", price: "72", barcode: "", category: "Рибалка" },
    { name: "гачки рак великі", price: "18", barcode: "", category: "Рибалка" },
    { name: "гачки трійники №10", price: "6", barcode: "20001554955444", category: "Рибалка" },
    { name: "гачки трійники №3", price: "6", barcode: "2000155495612", category: "Рибалка" },
    { name: "гачки трійники №9", price: "7", barcode: "200015549551", category: "Рибалка" },
    { name: "гачки деш в асорт", price: "19", barcode: "", category: "Рибалка" },
    { name: "гачки в кор набір", price: "37", barcode: "", category: "Рибалка" },
    { name: "гачки вел в кор", price: "20", barcode: "", category: "Рибалка" },
    { name: "грузики набір в кор мал", price: "35", barcode: "", category: "Рибалка" },
    { name: "гачок + сверло для бойлів", price: "50", barcode: "", category: "Рибалка" },
    { name: "сверло для бойлів", price: "24", barcode: "6942576354235", category: "Рибалка" },
    { name: "воблери в асорт", price: "86", barcode: "", category: "Рибалка" },
    { name: "наживка плаваюча в асорт", price: "6", barcode: "", category: "Рибалка" },
    { name: "поплавки кол", price: "24", barcode: "", category: "Рибалка" },
    { name: "поплавки якісні", price: "37", barcode: "", category: "Рибалка" },
    { name: "міні бойли в асорт", price: "22", barcode: "", category: "Рибалка" },
    { name: "вудочка дит набір", price: "32", barcode: "", category: "Рибалка" },
    { name: "дзвіночки на рибалку зел", price: "8", barcode: "", category: "Рибалка" },
    { name: "кормушка овал", price: "12", barcode: "", category: "Рибалка" },
    { name: "кормушка з гачками деш", price: "44", barcode: "", category: "Рибалка" },
    { name: "снасть фідер", price: "86", barcode: "", category: "Рибалка" },
    { name: "снасть фідер 70гр", price: "90", barcode: "4821596905236", category: "Рибалка" },
    { name: "товари для рибалки", price: "20", barcode: "", category: "Рибалка" },
    { name: "світлячок", price: "7", barcode: "6942546200183", category: "Рибалка" },
    { name: "наживка плаваюча аніс", price: "6", barcode: "4820177270503", category: "Рибалка" },
    { name: "наживка плаваюча конопля", price: "6", barcode: "4820177270701", category: "Рибалка" },
    { name: "наживка плаваюча універсальна", price: "6", barcode: "4820177270565", category: "Рибалка" },
    { name: "наживка плаваюча горох", price: "6", barcode: "4820177270527", category: "Рибалка" },
    { name: "стопор рез", price: "6", barcode: "2000155499807", category: "Рибалка" },
    { name: "котушка кобра 440", price: "308", barcode: "2200000179241", category: "Рибалка" },
    { name: "котушка кобра 240", price: "288", barcode: "2200000179227", category: "Рибалка" },
    { name: "шнур 125м", price: "148", barcode: "4678059004025", category: "Рибалка" },
    { name: "шнур 100м", price: "148", barcode: "712649105977", category: "Рибалка" },
    { name: "вбивця карася китай", price: "15", barcode: "4958368476288", category: "Рибалка" },
    { name: "котушка кобра 340", price: "296", barcode: "", category: "Рибалка" },
    { name: "снасть супер карп", price: "84", barcode: "", category: "Рибалка" },
    { name: "грузики набір в кор вел", price: "44", barcode: "", category: "Рибалка" },
    { name: "снасть арбуз", price: "48", barcode: "", category: "Рибалка" },
    { name: "спінінг 3м", price: "245", barcode: "", category: "Рибалка" },
    { name: "спінінг вудочка 4м", price: "310", barcode: "", category: "Рибалка" },
    { name: "садок для риби 3к", price: "130", barcode: "", category: "Рибалка" },
    { name: "підсак розкладний", price: "365", barcode: "", category: "Рибалка" },
    { name: "прикормка в асортименті", price: "56", barcode: "", category: "Рибалка" },
];


function displayAllProducts() {
    const allProductsTable = document.getElementById("allProducts").getElementsByTagName('tbody')[0];

    // Sort products by name
    const sortedProducts = products.slice().sort((a, b) => a.name.localeCompare(b.name));

    let html = "";
    sortedProducts.forEach(function (product) {
        html += "<tr><td>" + product.name + "</td><td>" + product.price + "</td><td>" + product.barcode + "</td><td>" + product.category;
    });

    allProductsTable.innerHTML = html;

    // Populate category filter dropdown
    const categoryFilter = document.getElementById("categoryFilter");
    const categories = [...new Set(sortedProducts.map(product => product.category))];
    categories.forEach(function (category) {
        const option = document.createElement("option");
        option.value = category;
        option.text = category;
        categoryFilter.appendChild(option);
    });
}


function searchByName() {
    const input = document.getElementById("searchByName").value.toLowerCase();
    const results = [];
    products.forEach(function (product) {
        if (product.name.toLowerCase().includes(input)) {
            results.push(product);
        }
    });
    displayResults(results, "searchResults");
}

function searchByBarcode() {
    const input = document.getElementById("searchByBarcode").value.trim();
    const results = [];
    products.forEach(function (product) {
        if (product.barcode.includes(input)) {
            results.push(product);
        }
    });
    displayResults(results, "searchResults");
}

function displayResults(results, tableId, sortBy) {
    const output = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    let html = "";
    if (results.length > 0) {
        // Sort results by the specified property
        if (sortBy) {
            results.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
        }
        results.forEach(function (product) {
            html += "<tr><td>" + product.name + "</td><td>" + product.price  + "</td><td>" + product.barcode + "</td></tr>";
        });
    } else {
        html = "<tr><td colspan='2'>Товар не знайдено</td></tr>";
    }
    output.innerHTML = html;
}

function filterByCategory() {
    const selectedCategory = document.getElementById("categoryFilter").value;
    if (selectedCategory === "all") {
        displayAllProducts();
    } else {
        const filteredProducts = products.filter(product => product.category === selectedCategory);
        displayFilteredProducts(filteredProducts);
    }
}

function displayFilteredProducts(filteredProducts) {
    // Sort filtered products by name
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));

    const allProductsTable = document.getElementById("allProducts").getElementsByTagName('tbody')[0];
    let html = "";
    filteredProducts.forEach(function (product) {
        html += "<tr><td>" + product.name + "</td><td>" + product.price + "</td><td>" + product.barcode + "</td><td>" + product.category;
    });
    allProductsTable.innerHTML = html;
}


document.getElementById("categoryFilter").addEventListener("change", filterByCategory);

displayAllProducts();

