// // const route = (event) => {
// // 	event = event || window.event;
// // 	event.preventDefault();
// // 	window.history.pushState({}, "", event.target.href);
// // }

// // window.route = route;

// const urlPageTitle = "SPA Page";

// window.addEventListener("click", (event) => {
// 	const {target} = event; // const target = event.target
// 	if (!target.matches("nav a")) {
// 		return ;
// 	}
// 	console.log("Yooo");
// 	event.preventDefault();
// 	urlRoute();
// })


// const urlRoutes = {
//     404: {
//         template: "/404.html",
//         title: "404",
//         description: "No route found"
//     },
//     "/": {
//         template: "/home.html",
//         title: "Home Page",
//         description: "Main Page"
//     },
//     "/about": {
//         template: "/about.html",
//         title: "About Page",
//         description: "About"
//     },
//     "/lorem": {
//         template: "/lorem.html",
//         title: "Lorem Page",
//         description: "Lorem"
//     },
//     "/index": {
//         template: "index.html",
//         title: "Lorem Page",
//         description: "Lorem"
//     },
//     "/profile": {
//         template: "/profile.html",
//         title: "Lorem Page",
//         description: "Lorem"
//     },
// 	"/settings": {
//         template: "/settings.html",
//         title: "Lorem Page",
//         description: "Lorem"
//     },
// 	"/game": {
//         template: "/game.html",
//         title: "Lorem Page",
//         description: "Lorem"
//     },
// 	"/top": {
//         template: "/top.html",
//         title: "Lorem Page",
//         description: "Lorem"
//     }
// };

// // function urlRoute(event) {
// // 	event = event || window.event;
// // 	event.preventDefault();
// // 	window.history.pushState({}, "", event.target.href);
// // 	urlLocationHandler();
// // }

// const urlRoute = (event) => {
// 	event = event || window.event;
// 	console.log(event);
// 	event.preventDefault();
// 	window.history.pushState({}, "", event.target.href);
// 	urlLocationHandler();
// }

// const urlLocationHandler = async () => {
// 	const location = window.location.pathname;
// 	if (location.length == 0) {
// 		location = "/"
// 	}
// 	const route = urlRoutes[location] || urlRoutes["/"];
// 	const html = await fetch(route.template).then((response) => response.text());
// 	document.getElementById("content").innerHTML = html;
// 	document.title = route.title;
// 	document.querySelector('meta[name="description"]')
// 	.setAttribute("content", route.description);
// };

// window.onpopstate = urlLocationHandler;
// window.route = urlRoute;
// urlLocationHandler();
// url-router.js

const urlRoutes = {
    404: {
        template: "/404.html",
        title: "404",
        description: "No route found"
    },
    "/": {
        template: "/home.html",
        title: "Home Page",
        description: "Main Page"
    },
    "/home": {
        template: "/home.html",
        title: "Home Page",
        description: "Main Page"
    },
    "/about": {
        template: "/about.html",
        title: "About Page",
        description: "About"
    },
    "/lorem": {
        template: "/lorem.html",
        title: "Lorem Page",
        description: "Lorem"
    },
    "/index": {
        template: "index.html",
        title: "Lorem Page",
        description: "Lorem"
    },
    "/profile": {
        template: "/profile.html",
        title: "Lorem Page",
        description: "Lorem"
    },
    "/settings": {
        template: "/settings.html",
        title: "Lorem Page",
        description: "Lorem"
    },
    "/game": {
        template: "/game.html",
        title: "Lorem Page",
        description: "Lorem"
    },
    "/top": {
        template: "/top.html",
        title: "Lorem Page",
        description: "Lorem"
    }
};

const urlRoute = (routeKey) => {
    event.preventDefault();
    const location = window.location.pathname;

    // Utilisez la clé de la route pour obtenir les informations de la route
    const route = urlRoutes[routeKey] || urlRoutes["/"];
    window.history.pushState({}, "", routeKey);
    urlLocationHandler(route);
}

const urlLocationHandler = async (route) => {
    const response = await fetch("templates" + route.template);
    const html = await response.text();

    // Créez un nouveau div en dehors du DOM
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    // Récupérez tous les scripts du nouveau div
    const scripts = tempDiv.querySelectorAll('script');
    // Exécutez chaque script individuellement
    scripts.forEach(script => {
        const newScript = document.createElement('script');
        newScript.src = script.src;
        newScript.textContent = script.textContent;
        document.body.appendChild(newScript);
    });
    // Injectez le HTML dans la div content
    document.getElementById("content").innerHTML = html;
    document.title = route.title;
    document.querySelector('meta[name="description"]').setAttribute("content", route.description);
};

window.onpopstate = () => {
    const location = window.location.pathname;
    const route = urlRoutes[location] || urlRoutes["/"];
    urlLocationHandler(route);
};

// Initialisation lors du chargement de la page
window.addEventListener("DOMContentLoaded", () => {
    const location = window.location.pathname;
    const route = urlRoutes[location] || urlRoutes["/"];
    urlLocationHandler(route);


});
