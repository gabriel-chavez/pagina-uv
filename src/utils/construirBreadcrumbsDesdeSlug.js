// utils.js

const construirBreadcrumbsDesdeSlug = (slug) => {
    const breadcrumbs = [{ label: 'Inicio', url: '/' }];
    
    let currentUrl = '';
    slug.forEach((segment, index) => {
        currentUrl += `/${segment}`;
        const label = segment.replace(/-/g, ' '); // Reemplaza guiones con espacios
        const breadcrumb = { label: label.charAt(0).toUpperCase() + label.slice(1) }; // Capitaliza la primera letra
        
        if (index < slug.length - 1) {
            breadcrumb.url = currentUrl.toLowerCase(); // Añade URL solo si no es el último segmento
        }

        breadcrumbs.push(breadcrumb);
    });

    return breadcrumbs;
};

export { construirBreadcrumbsDesdeSlug  };
