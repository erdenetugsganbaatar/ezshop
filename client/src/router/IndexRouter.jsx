import React, { useEffect } from "react";

import { Menu, Dropdown, Form, Input, Button, Image, Checkbox, Layout, Row, Col, Divider, Carousel } from "antd";
import { DownOutlined } from '@ant-design/icons';

import MultiCarousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { SearchOutlined, ShoppingCartOutlined, DownloadOutlined, UserOutlined } from "@ant-design/icons"

import { API_BASE_URL } from "@/config/serverApiConfig"

import { selectAllCategories, selectAllBanners, selectAllBrands, selectAllSpecials, selectProducts } from "@/redux/client/selectors";
import { crud } from "@/redux/client/actions"
import { useDispatch, useSelector } from "react-redux";

const { Content, Footer } = Layout;


const SearchBar = () => {
    return (
        <Col span={10}>
            <Row style={{ backgroundColor: "#dcdddf" }} className="SearchBar__InputWrapper">
                <SearchOutlined />
                <input type="text" style={{ flex: 1, fontSize: "20px" }} />

                <div className="button"><div className="arrow"></div> ХАЙХ</div>
            </Row>

        </Col>
    )
}
const MenuItem = ({ children }) => {
    return (
        <div className="MenuItemWrapper">
            <div className="MenuItem" style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: 20 }}>
                {children}
            </div>
        </div>
    )
}
const Menus = () => {
    return (
        <div style={{ display: "flex" }}>
            <MenuItem>
                <DownloadOutlined style={{ fontSize: 30 }} />
                <div>ХАДГАЛСАН</div>
            </MenuItem>

            <MenuItem>
                <ShoppingCartOutlined style={{ fontSize: 30 }} />
                <div>САГС</div>
            </MenuItem>
            <MenuItem>
                <UserOutlined style={{ fontSize: 30 }} />
                <div>НЭВТРЭХ</div>
            </MenuItem>
        </div>
    )
}
const TopHeader = () => {
    return (
        <Row justify="center" style={{ backgroundColor: "#ff4208", color: "white", padding: "5px 0" }}>
            <Col span={10} justify="start">Тавтай морил</Col>
            <Col span={10} style={{ display: "flex", justifyContent: "flex-end", rowGap: "40px", colGap: "40px" }} >
                <span>88536314</span>
                <span>09:00 - 21:00 өдөр бүр</span>
                <span>Сайт ашиглах заавар</span>
            </Col>
        </Row>
    )
}
const BottomHeader = () => {
    return (
        <Row justify="center" >
            <Col span={20}>
                <Row justify="space-between" align="middle">
                    <img src={API_BASE_URL + "uploads/logo.png"} alt="" />
                    <SearchBar />
                    <Menus />
                </Row>
            </Col>
        </Row>
    )
}
const Navigation = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(crud.resetAction("category"));
        dispatch(crud.category("pub/category/all"));
    }, []);
    const { result: categories, isLoading } = useSelector(
        selectAllCategories
    );
    const { SubMenu } = Menu;

    return (
        <>
            <Row justify="center">
                <Col span={20}>
                    <Row justify="start" align="middle">
                        <Col className="leftNav">
                            <Row gutter={16} justify="start" align="middle">
                                {
                                    categories.items.map(
                                        item => {
                                            const menu = (
                                                <Menu>
                                                    <Menu.ItemGroup title="Group title">
                                                        <Menu.Item>1st menu item</Menu.Item>
                                                        <Menu.Item>2nd menu item</Menu.Item>
                                                    </Menu.ItemGroup>
                                                    <SubMenu title="sub menu">
                                                        <Menu.Item>3rd menu item</Menu.Item>
                                                        <Menu.Item>4th menu item</Menu.Item>
                                                    </SubMenu>
                                                </Menu>
                                            );
                                            return (
                                                <Dropdown overlay={menu} key={item.id}>
                                                    <Col>
                                                        <a className="ant-dropdown-link" style={{ color: "black" }} onClick={e => e.preventDefault()}>
                                                            {item.name}
                                                        </a>
                                                    </Col>
                                                </Dropdown>
                                            )
                                        }

                                    )
                                }
                            </Row>
                        </Col>
                        <Col className="rightNav">
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
const Header = () => {
    return (
        <>
            <TopHeader />
            <BottomHeader />
            <Navigation />
        </>
    )
}
const BrandCard = ({ products, brandImageUrl, cardId }) => {
    products.length = 6;
    const flexDirection = cardId % 2 === 1 ? "row" : "row-reverse";
    const half = Math.ceil(products.length / 2);

    const firstHalf = products.slice(0, half)
    const secondHalf = products.slice(-half)
    return (
        <>
            {/* brandImageUrl, products */}
            <Row style={{ flexDirection, rowGap: 16, colGap: 16, flexWrap: "nowrap" }}>
                <Col span={12} style={{ flexShrink: 1 }}>
                    <div>
                        <img src={API_BASE_URL + brandImageUrl} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
                    </div>
                </Col>
                <Col span={12} style={{ display: "flex", flexShrink: 1, flexDirection: "column", rowGap: "16px", colGap: "16px" }}>

                    <Row style={{ height: "50%", colGap: "16px", rowGap: "16px", flexWrap: "nowrap" }}>
                        {
                            firstHalf.map((product, index) => {
                                return (
                                    <Col key={product.id} span={8} style={{ display: "flex", flexDirection: "column", backgroundColor: "#eceef0", alignItems: "center", flexShrink: 1 }}>
                                        <div style={{ flexGrow: 1 }}></div>
                                        <img src={API_BASE_URL + product.filepath} alt="temp product" />
                                        <p>{product.name}</p>
                                        <p>{product.category}</p>
                                        <p>{product.cost}</p>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Row style={{ height: "50%", rowGap: "16px", colGap: 16, flexWrap: "nowrap" }}>
                        {
                            secondHalf.map((product, index) => {
                                return (
                                    <Col key={product.id} span={8} style={{ display: "flex", flexDirection: "column", backgroundColor: "#eceef0", alignItems: "center", flexShrink: 1 }}>
                                        <div style={{ flexGrow: 1 }}></div>
                                        <img src={API_BASE_URL + product.filepath} alt="temp product" />
                                        <p>{product.name}</p>
                                        <p>{product.category}</p>
                                        <p>{product.cost}</p>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>
            </Row>
        </>
    )
}
const BrandCards = ({ brands }) => {

    return (
        <div style={{ display: "flex", flexDirection: "column", rowGap: "16px", colGap: "16px" }}>
            {
                Array.isArray(brands) ? brands.map(brand => {
                    return (<BrandCard cardId={brand.id} key={brand.id} products={brand.Products} brandImageUrl={brand.filepath} />)
                }) : null
            }

        </div>
    )
}

const Product = ({ product }) => {
    return (
        <Col span={4} >
            <div className="shop-product">
                <img className="image" src={API_BASE_URL + product.filepath} alt={product.name} />
                <div className="name">
                    {product.name}
                </div>
                <div className="cost">
                    {product.cost}
                </div>
            </div>
        </Col>
    )
}
const Products = ({ products, span=20 }) => {
    return (
        <Col style={{ backgroundColor: "white", padding: 16 }} span={span}>
            <Row align="center" gutter={[16, 16]} style={{ marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0 }}>
                {
                    products && products.map((product) => {
                        return (
                            <Product key={product.id} product={product} />
                        )
                    })
                }
            </Row>
        </Col>
    )
}
const Shop = ({ category }) => {
    return (
        <>
            <img src={API_BASE_URL + category.coverImagePath} alt="cover image" />
            <Row align="center" style={{ backgroundColor: category.backgroundColor, padding: 16 }}>
                <Products products={category.products} />
            </Row>
        </>
    )

}
const Special = ({ special }) => {
    return (
        <>
            <h1 className="title">{special.name}</h1>
            <Row align="center" style={{ padding: 16 }}>
                <Products products={special.Products} />
            </Row>
        </>
    )
}
const Slider = ({ banners }) => {
    if (!banners) banners = [];
    return (
        <Carousel autoplay>
            {banners.map((banner) => {
                return (
                    <img
                        height="500px"
                        width="100%"
                        className="hehe"
                        style={{ objectFit: "cover" }}
                        key={banner.id}
                        src={API_BASE_URL + banner.filepath} />
                )
            })}
        </Carousel>
    )
}
const Container = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(crud.resetAction("brandWithProduct"));
        dispatch(crud.brand("pub/brand/product?limit=8"));

        dispatch(crud.resetAction("special"));
        dispatch(crud.special("pub/special/all"));

        dispatch(crud.resetAction("banner"));
        dispatch(crud.banner("pub/slider/category/0"));

        dispatch(crud.resetAction("product"));
        dispatch(crud.product("pub/product?limit=48"));
    }, []);
    const { result: allBrands } = useSelector(
        selectAllBrands
    );
    const brands = JSON.parse(JSON.stringify(allBrands.items));

    const { result: allSpecials } = useSelector(
        selectAllSpecials
    );
    const specials = JSON.parse(JSON.stringify(allSpecials.items));

    const { result: allProducts } = useSelector(
        selectProducts
    );
    const products = JSON.parse(JSON.stringify(allProducts.items));
    const { result: allSliders } = useSelector(
        selectAllBanners
    );
    const sliders = JSON.parse(JSON.stringify(allSliders.items))
    const { result: allCategories, isLoading } = useSelector(
        selectAllCategories
    );
    const categories = JSON.parse(JSON.stringify(allCategories.items))
    return (
        <>
            {/* Slider #1 */}
            {sliders.length > 0 ? <Slider banners={sliders.shift().banner} /> : null}
            <Row justify="center">
                <Col span={20}>
                    <h1 className="title">Онцлох брендүүд</h1>
                    {/* Brand #1 */}
                    <BrandCards brands={brands.splice(0, 4)} />
                    {/* Slider #2 */}
                    <h1 className="title">WEEKLY SPECIAL</h1>
                    <MultiCarousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 6,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        <img style={{ borderRadius: "20px" }} src={API_BASE_URL + "uploads/temp_special.png"} alt="" />
                        <img style={{ borderRadius: "20px" }} src={API_BASE_URL + "uploads/temp_special.png"} alt="" />
                        <img style={{ borderRadius: "20px" }} src={API_BASE_URL + "uploads/temp_special.png"} alt="" />
                        <img style={{ borderRadius: "20px" }} src={API_BASE_URL + "uploads/temp_special.png"} alt="" />
                        <img style={{ borderRadius: "20px" }} src={API_BASE_URL + "uploads/temp_special.png"} alt="" />
                        <img style={{ borderRadius: "20px" }} src={API_BASE_URL + "uploads/temp_special.png"} alt="" />
                        <img style={{ borderRadius: "20px" }} src={API_BASE_URL + "uploads/temp_special.png"} alt="" />
                        <img style={{ borderRadius: "20px" }} src={API_BASE_URL + "uploads/temp_special.png"} alt="" />
                        <img style={{ borderRadius: "20px" }} src={API_BASE_URL + "uploads/temp_special.png"} alt="" />
                    </MultiCarousel>
                    {/* Shop #1 */}
                    {categories.length != 0 ? <Shop category={categories.shift()} /> : null}
                    {/* Brand #2 */}
                    <BrandCards brands={brands.splice(0, 4)} />
                    {/* Shop #2 */}
                    {categories.length != 0 ? <Shop category={categories.shift()} /> : null}
                    {/* Slider #3 */}
                    {sliders.length != 0 ? <Slider banners={sliders.shift().banner} /> : null}
                    {/* Special #1 */}
                    {specials.length != 0 ? <Special special={specials.shift()} /> : null}
                    {/* Shop #3 */}
                    {categories.length != 0 ? <Shop category={categories.shift()} /> : null}
                    {/* Slider #4 */}
                    {sliders.length != 0 ? <Slider banners={sliders.shift().banner} /> : null}
                    {/* Special #2 */}
                    {specials.length != 0 ? <Special special={specials.shift()} /> : null}
                    {/* Shop #4 */}
                    {categories.length != 0 ? <Shop category={categories.shift()} /> : null}
                    {/* Special #3 */}
                    {specials.length != 0 ? <Special special={specials.shift()} /> : null}
                    {/* Shop #5 */}
                    {categories.length != 0 ? <Shop category={categories.shift()} /> : null}
                    {/* Чөлөөт products */}
                    {products.length != 0 ? <Products products={products} span={24}/> : null}
                </Col>
            </Row>
        </>
    )
}
const IndexPage = () => {

    return (
        <>
            <Layout style={{ backgroundColor: "#fff" }}>
                <Header />
                <Container />
            </Layout>
        </>
    );

};

export default IndexPage;
