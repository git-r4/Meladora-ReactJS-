
//components
import About from "../../main/about/About";
import Garden from "../../main/garden/Garden";
import Products from "../../main/products/Products";
import Service from "../../main/service/Service";
import Social from "../../main/social/Social";
import Support from "../../main/support/Support";

export const NavbarData = [
    {
        path: '/',
        Component: About,
        name: 'Biz kimik?'
    },
    {
        path: '/garden',
        Component: Garden,
        name: 'Bağlarımız'
    },
    {
        path: '/products',
        Component: Products,
        name: 'Məhsullarımız'
    },
    {
        path: '/service',
        Component: Service,
        name: 'Xidmətlərimiz'
    },
    {
        path: '/social',
        Component: Social,
        name: 'Sosial məsuliyyət'
    },
    {
        path: '/support',
        Component: Support,
        name: 'Əlaqə'
    }
];