import React, { useEffect } from "react";

import { Menu, Dropdown, Form, Input, Button, Image, Checkbox, Layout, Row, Col, Divider, Carousel } from "antd";
import { DownOutlined } from '@ant-design/icons';

import MultiCarousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { SearchOutlined, ShoppingCartOutlined, DownloadOutlined, UserOutlined } from "@ant-design/icons"

import { API_BASE_URL } from "@/config/serverApiConfig"

import { selectAllCategories, selectAllBanners, selectAllBrands } from "@/redux/client/selectors";
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
            <Col span={10} style={{ display: "flex", justifyContent: "flex-end", gap: "40px" }} >
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
            <Row style={{ flexDirection, gap: 16, flexWrap: "nowrap" }}>
                <Col span={12} style={{ flexShrink: 1 }}>
                    <div>
                        <img src={API_BASE_URL + brandImageUrl} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
                    </div>
                </Col>
                <Col span={12} style={{ display: "flex", flexShrink: 1, flexDirection: "column", gap: "16px" }}>

                    <Row style={{ height: "50%", gap: "16px", flexWrap: "nowrap" }}>
                        {
                            firstHalf.map((product, index) => {
                                return (
                                    <Col span={8} style={{ display: "flex", flexDirection: "column", backgroundColor: "#eceef0", alignItems: "center", flexShrink: 1 }}>
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
                    <Row style={{ height: "50%", gap: "16px", flexWrap: "nowrap" }}>
                        {
                            secondHalf.map((product, index) => {
                                return (
                                    <Col span={8} style={{ display: "flex", flexDirection: "column", backgroundColor: "#eceef0", alignItems: "center", flexShrink: 1 }}>
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
const BrandCards = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(crud.resetAction("brandWithProduct"));
        dispatch(crud.brand("pub/brand/product"));
    }, []);
    const { result, isLoading } = useSelector(
        selectAllBrands
    );
    const brands = result.items;
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {
                Array.isArray(brands) ? brands.map(brand => {
                    return (<BrandCard cardId={brand.id} key={brand.id} products={brand.Products} brandImageUrl={brand.filepath} />)
                }) : null
            }

        </div>
    )
}

const ShopProduct = ({ product }) => {
    return (
        <Col span={4} >
            <div className="shop-product">
                {/* Sale if has it */}
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
const ShopProducts = ({ category }) => {
    return (
        <Col style={{ backgroundColor: "white", padding:16}} span="20">
            <Row align="center" gutter={[16,16]} style={{margin:0}}> 
                {
                    category.products && category.products.map((product) => {
                        return (
                            <ShopProduct product={product} />
                        )
                    })
                }
            </Row>
        </Col>
    )
}
const Shop = () => {
    const { result, isLoading } = useSelector(
        selectAllCategories
    );
    const categories = result.items;
    console.log('%c result:', "background:green; color:white;", result)
    if (categories.length != 0)
        return (

            <>
                <img src={API_BASE_URL + categories[1].coverImagePath} alt="cover image" />
                <Row align="center" style={{ backgroundColor: categories[1].backgroundColor, padding:16}}>
                    <ShopProducts category={categories[1]} />

                </Row>
            </>
        )
    return <></>
}
const Container = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(crud.resetAction("banner"));
        dispatch(crud.banner("pub/banner/category/0"));
    }, []);
    const { result: banners, isLoading } = useSelector(
        selectAllBanners
    );
    return (
        <>
            <Carousel autoplay>
                {banners.items.map((item, index) => {
                    if (index == 0) {
                        return (
                            <img
                                height="500px"
                                width="100%"
                                style={{ objectFit: "cover" }}
                                key={item.id}
                                src={API_BASE_URL + item.filepath} />
                        )
                    }
                })}
            </Carousel>
            <Row justify="center">
                <Col span={20}>

                    <h1 className="title">Онцлох брендүүд</h1>
                    <BrandCards />
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
                    <Carousel autoplay style={{ marginTop: 20 }}>
                        {banners.items.map((item, index) => {
                            if (index !== 0) {
                                return (
                                    <img
                                        height="500px"
                                        width="100%"
                                        style={{ objectFit: "cover" }}
                                        key={item.id}
                                        src={API_BASE_URL + item.filepath} />
                                )
                            }
                        })}
                    </Carousel>
                    <Shop />
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
