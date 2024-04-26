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
    { name: "порошок для ручного 400г", price: "40", barcode: "", category: "Хімія" },
    { name: "сода кальцинована", price: "60", barcode: "4820182010088", category: "Хімія" },
    { name: "порошок для чищення", price: "44", barcode: "4823107604324", category: "Хімія" },
    { name: "гігієнічна помада", price: "12", barcode: "6953350912385", category: "Хімія" },
    { name: "одеколон трійний в асорт", price: "30", barcode: "4820010220092", category: "Хімія" },
    { name: "рідина для зняття лаку ноготок 100", price: "45", barcode: "4820031460033", category: "Хімія" },
    { name: "рідина для зняття лаку 50", price: "28", barcode: "4820031460019", category: "Хімія" },
    { name: "білизна", price: "17", barcode: "4820210640423", category: "Хімія" },
    { name: "мило рідке 5л", price: "155", barcode: "", category: "Хімія" },
    { name: "рідина для миття посуду 5л плин", price: "135", barcode: "", category: "Хімія" },
    { name: "рідина для миття посуду blitz 1л", price: "52", barcode: "4820051290115", category: "Хімія" },
    { name: "рідина для миття посуду фея 1л", price: "40", barcode: "4820051290238", category: "Хімія" },
    { name: "мило господ рідке", price: "52", barcode: "4820051293062", category: "Хімія" },
    { name: "засіб для миття підлоги", price: "55", barcode: "4820051292959", category: "Хімія" },
    { name: "кондиціонер для прання", price: "68", barcode: "4820051293185", category: "Хімія" },
    { name: "шампунь одноразовий", price: "5", barcode: "4820017660266", category: "Хімія" },
    { name: "папір туалет Ласка", price: "6", barcode: "4820131180015", category: "Хімія" },
    { name: "папір туалет Кохавинка", price: "8", barcode: "4820032450033", category: "Хімія" },
    { name: "папір туалет Мрія 100", price: "7", barcode: "4820131180022", category: "Хімія" },
    { name: "папір туалет XXXL", price: "14", barcode: "4820131180077", category: "Хімія" },
    { name: "папір туалет обухів 2шар", price: "46", barcode: "4820003833827", category: "Хімія" },
    { name: "мило господ сила", price: "20", barcode: "4820023363755", category: "Хімія" },
    { name: "порошок для ручного прання", price: "36", barcode: "4262396141897", category: "Хімія" },
    { name: "туалетний папір двошар 4шт", price: "45", barcode: "4820023747135", category: "Хімія" },
    { name: "серветка для підлоги", price: "38", barcode: "4823071623260", category: "Хімія" },
    { name: "кріт в гранулах", price: "25", barcode: "4820098541171", category: "Хімія" },
    { name: "бинт не стерильний", price: "16", barcode: "4820009796928", category: "Хімія" },
    { name: "паста зубна мала", price: "28", barcode: "8690506471767", category: "Хімія" },
    { name: "паста зубна вел", price: "50", barcode: "8690506471798", category: "Хімія" },
    { name: "мило шик в асорт", price: "12", barcode: "4820023367838", category: "Хімія" },
    { name: "вушні палички бамбук", price: "11", barcode: "8809058410135", category: "Хімія" },
    { name: "вушні палички 100 віола", price: "22", barcode: "4820009790216", category: "Хімія" },
    { name: "ватні диски 80шт віола", price: "38", barcode: "4820009790186", category: "Хімія" },
    { name: "пластир однораз", price: "10", barcode: "8699603800012", category: "Хімія" },
    { name: "пластир 50шт", price: "27", barcode: "6971221501222", category: "Хімія" },
    { name: "рушник кохавинка папер", price: "32", barcode: "4820032450064", category: "Хімія" },
    { name: "мило дит рідке", price: "41", barcode: "4820051293901", category: "Хімія" },
    { name: "мило рідке з дозатором", price: "41", barcode: "", category: "Хімія" },
    { name: "рідина для миття посуду бліц 500мл лимон", price: "34", barcode: "4820051290139", category: "Хімія" },
    { name: "рідина для миття посуду фея пакет", price: "22", barcode: "4820051290214", category: "Хімія" },
    { name: "рідина для миття посуду бліц в асорт пакет", price: "23", barcode: "", category: "Хімія" },
    { name: "гель для чищення туалету", price: "40", barcode: "4820051293567", category: "Хімія" },
    { name: "гель для чищення туалету бліц", price: "51", barcode: "4820051290993", category: "Хімія" },
    { name: "рідина для кухні і грилю бліц", price: "42", barcode: "4820051290542", category: "Хімія" },
    { name: "рідина для вікон бліц", price: "41", barcode: "4820051290184", category: "Хімія" },
    { name: "порошок для чищення нов", price: "42", barcode: "4823069704629", category: "Хімія" },
    { name: "крем для чищення поверхонь", price: "48", barcode: "4820051293795", category: "Хімія" },
    { name: "шампунь ромашка", price: "67", barcode: "4820168433511", category: "Хімія" },
    { name: "гель для душу 400мл", price: "33", barcode: "4820051293321", category: "Хімія" },
    { name: "гель для душу", price: "36", barcode: "", category: "Хімія" },
    { name: "вудочка 2,4м", price: "294", barcode: "", category: "Рибалка" },
    { name: "гачки трійники №10", price: "6", barcode: "20001554955444", category: "Рибалка" },
    { name: "шампунь орхідея", price: "30", barcode: "4820051291884", category: "Хімія" },
    { name: "шампунь алоє вера", price: "30", barcode: "4820051291914", category: "Хімія" },
    { name: "капсули для прання аріель", price: "17", barcode: "", category: "Хімія" },
    { name: "хімія в асортименті", price: "20", barcode: "", category: "Хімія" },
    { name: "вушні палички 160 віола", price: "32", barcode: "4820009790285", category: "Хімія" },
    { name: "антижир гель", price: "30", barcode: "4820051291761", category: "Хімія" },
    { name: "рідина для миття посуду Фея 500мл банка", price: "25", barcode: "4820051290221", category: "Хімія" },
    { name: "рідина для миття посуду бліц 500мл грейпфрукт", price: "34", barcode: "4820051292560", category: "Хімія" },
    { name: "зубна паста саніно 90мл зел", price: "50", barcode: "8690506545116", category: "Хімія" },
    { name: "зубна паста саніно 90мл фіол", price: "50", barcode: "8690506545093", category: "Хімія" },
    { name: "крем для бриття 61мл арко", price: "51", barcode: "8690506094515", category: "Хімія" },
    { name: "мило ромаш 70гр", price: "12", barcode: "4820023360631", category: "Хімія" },
    { name: "мило дитяче 70гр", price: "12", barcode: "4820023360075", category: "Хімія" },
    { name: "мило дит з екстракт череди", price: "12", barcode: "4820023360747", category: "Хімія" },
    { name: "рідина для миття вікон запаска", price: "30", barcode: "4820051290191", category: "Хімія" },
    { name: "рідина для миття підлоги", price: "52", barcode: "4820051292966", category: "Хімія" },
    { name: "мило рідке бліц 500мл", price: "41", barcode: "4820051291167", category: "Хімія" },
    { name: "крем мило vanilla melon 500мл", price: "30", barcode: "4820051293994", category: "Хімія" },
    { name: "рідке мило чорниця 500мл", price: "30", barcode: "4820051293963", category: "Хімія" },
    { name: "шампунь для волосся кропива", price: "67", barcode: "4820168433504", category: "Хімія" },
    { name: "порошок для ручного лотос", price: "41", barcode: "4820268100436", category: "Хімія" },
    { name: "прокладки always 1шт", price: "10", barcode: "8006540211380", category: "Хімія" },
    { name: "шампунь тео 350мл", price: "71", barcode: "3800024046728", category: "Хімія" },
    { name: "мило рідке бліц 1л персик", price: "52", barcode: "4820051290436", category: "Хімія" },
    { name: "мило рідке бліц 1л дотик свіжості", price: "52", barcode: "4820051291204", category: "Хімія" },
    { name: "мило рідке бліц 1л ніжна орхідея", price: "52", barcode: "4820051291235", category: "Хімія" },
    { name: "мило рідке бліц 1л кокос", price: "52", barcode: "4820051291211", category: "Хімія" },
    { name: "рідина для прання дит речей 1л", price: "63", barcode: "4820051293918", category: "Хімія" },
    { name: "мило рідке бліц 5л кокос", price: "155", barcode: "4820051291365", category: "Хімія" },
    { name: "мило рідке бліц 5л персик", price: "155", barcode: "4820051290450", category: "Хімія" },
    { name: "універсальна рідина для прання 4л", price: "197", barcode: "4820051293376", category: "Хімія" },
    { name: "гель чищення туалет", price: "48", barcode: "4820051293284", category: "Хімія" },
    { name: "рідина для миття посуду бліц алое", price: "28", barcode: "4820051294021", category: "Хімія" },
    { name: "рідина для миття посуду бліц бальзам", price: "28", barcode: "4820051294038", category: "Хімія" },
    { name: "одеколон For men", price: "30", barcode: "4820010220252", category: "Хімія" },
    { name: "порошок для ручного гала", price: "43", barcode: "8006540512180", category: "Хімія" },
    { name: "паста зубна саніно 65г", price: "30", barcode: "8690506546465", category: "Хімія" },
    { name: "паста зубна саніно 65г натур екстракт", price: "30", barcode: "8690506546489", category: "Хімія" },
    { name: "паста зубна саніно 65г відбіл", price: "30", barcode: "8690506546472", category: "Хімія" },
    { name: "крем для рук велюр живильний", price: "24", barcode: "4820215050616", category: "Хімія" },
    { name: "крем для рук екстракт календули", price: "20", barcode: "4823107605529", category: "Хімія" }


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

