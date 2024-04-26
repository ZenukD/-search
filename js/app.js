

const products = [
    { name: "вудочка 2,4м", price: "294", barcode: "" },
    { name: "вудочка 2,7м", price: "274", barcode: "" },
    { name: "котушка кобра 640", price: "328", barcode: "" },
    { name: "котушка кобра 540", price: "318", barcode: "" },
    { name: "котушка 200", price: "184", barcode: "" },
    { name: "лєска деш в асорт", price: "56", barcode: "" },
    { name: "лєска флюрокарбон", price: "72", barcode: "" },
    { name: "гачки рак великі", price: "18", barcode: "" },
    { name: "гачки трійники №10", price: "6", barcode: "20001554955444" },
    { name: "гачки трійники №3", price: "6", barcode: "2000155495612" },
    { name: "гачки трійники №9", price: "7", barcode: "200015549551" },
    { name: "гачки деш в асорт", price: "19", barcode: "" },
    { name: "гачки в кор набір", price: "37", barcode: "" },
    { name: "гачки вел в кор", price: "20", barcode: "" },
    { name: "грузики набір в кор мал", price: "35", barcode: "" },
    { name: "гачок + сверло для бойлів", price: "50", barcode: "" },
    { name: "сверло для бойлів", price: "24", barcode: "6942576354235" },
    { name: "воблери в асорт", price: "86", barcode: "" },
    { name: "наживка плаваюча в асорт", price: "6", barcode: "" },
    { name: "поплавки кол", price: "24", barcode: "" },
    { name: "поплавки якісні", price: "37", barcode: "" },
    { name: "міні бойли в асорт", price: "22", barcode: "" },
    { name: "вудочка дит набір", price: "32", barcode: "" },
    { name: "дзвіночки на рибалку зел", price: "8", barcode: "" },
    { name: "кормушка овал", price: "12", barcode: "" },
    { name: "кормушка з гачками деш", price: "44", barcode: "" },
    { name: "снасть фідер", price: "86", barcode: "" },
    { name: "снасть фідер 70гр", price: "90", barcode: "4821596905236" },
    { name: "товари для рибалки", price: "20", barcode: "" },
    { name: "світлячок", price: "7", barcode: "6942546200183" },
    { name: "наживка плаваюча аніс", price: "6", barcode: "4820177270503" },
    { name: "наживка плаваюча конопля", price: "6", barcode: "4820177270701" },
    { name: "наживка плаваюча універсальна", price: "6", barcode: "4820177270565" },
    { name: "наживка плаваюча горох", price: "6", barcode: "4820177270527" },
    { name: "стопор рез", price: "6", barcode: "2000155499807" },
    { name: "котушка кобра 440", price: "308", barcode: "2200000179241" },
    { name: "котушка кобра 240", price: "288", barcode: "2200000179227" },
    { name: "шнур 125м", price: "148", barcode: "4678059004025" },
    { name: "шнур 100м", price: "148", barcode: "712649105977" },
    { name: "вбивця карася китай", price: "15", barcode: "4958368476288" },
    { name: "котушка кобра 340", price: "296", barcode: "" },
    { name: "снасть супер карп", price: "84", barcode: "" },
    { name: "грузики набір в кор вел", price: "44", barcode: "" },
    { name: "снасть арбуз", price: "48", barcode: "" },
    { name: "спінінг 3м", price: "245", barcode: "" },
    { name: "спінінг вудочка 4м", price: "310", barcode: "" },
    { name: "садок для риби 3к", price: "130", barcode: "" },
    { name: "підсак розкладний", price: "365", barcode: "" },
    { name: "прикормка в асортименті", price: "56", barcode: "" },
];

function displayAllProducts() {
    const allProductsTable = document.getElementById("allProducts").getElementsByTagName('tbody')[0];

    // Sort products by name
    const sortedProducts = products.slice().sort((a, b) => a.name.localeCompare(b.name));

    let html = "";
    sortedProducts.forEach(function (product) {
        html += "<tr><td>" + product.name + "</td><td>" + product.price + "</td><td>" + product.barcode + "</td></tr>";
    });

    allProductsTable.innerHTML = html;
}


displayAllProducts();

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

function displayResults(results, tableId) {
    const output = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    let html = "";
    if (results.length > 0) {
        results.forEach(function (product) {
            html += "<tr><td>" + product.name + "</td><td>" + product.price  + "</td><td>" + product.barcode + "</td></tr>";
        });
    } else {
        html = "<tr><td colspan='2'>Товар не знайдено</td></tr>";
    }
    output.innerHTML = html;
}
