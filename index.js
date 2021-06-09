const axios = require("axios");

const accountDomain = "https://accountName.myvtex.com";

axios
    .get(`${accountDomain}/api/catalog_system/pub/category/tree/2/`)
    .then((response) => {
        let htmlMenu = "";
        Array.from(response.data).forEach((department) => {
            htmlMenu += `<li class="nav__submenu__list-item nav__lvl-2 has-submenu">
                <a title="${department.name}" href="${department.url.replace(
                accountDomain,
                ""
            )}">${department.name}</a>
                <div class="nav__submenu-category-subcategory">`;
            Array.from(department.children).map((category) => {
                htmlMenu += `
                    <div class="nav__submenu-category-subcategory-content-itens">
                        <h5 class="nav__submenu-category-subcategory-content-title">${category.name}</h5>`;
                Array.from(category.children).map((subCategory) => {
                    htmlMenu += `<a href="${subCategory.url.replace(
                        accountDomain,
                        ""
                    )}" class="sublink">${subCategory.name}</a>`;
                });
                htmlMenu += `<a href="${category.url.replace(
                    accountDomain,
                    ""
                )}" class="sublink link-down">Ver todos</a>`;
                htmlMenu += `</div>`;
            });
            htmlMenu += `</div>`;
            htmlMenu += `</li>`;
        });

        console.log(htmlMenu);
    });
