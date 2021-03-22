import React, { useEffect, useState } from "react";
import { Mainvisual } from "../../components";
import ProductList from "../../components/ProductList/ProductList";
import { Container } from "../../GlobalStyle";
import { data } from "./Data";
import {
    BlankSpace,
    HomeContent,
    HomeProduct,
    SubTitle,
    Title,
} from "./Home.elements";

function Home() {
    const [fullHeight, setFullHeight] = useState(window.innerHeight);
    const setHeight = () => {
        setFullHeight(window.innerHeight);
    };
    useEffect(() => {
        setHeight();
    }, []);
    window.addEventListener("resize", setHeight);
    return (
        <>
            <Mainvisual fullHeight={fullHeight} />
            <BlankSpace fullHeight={fullHeight} />
            <HomeContent>
                <HomeProduct>
                    <Container>
                        <Title>{data.title}</Title>
                        <SubTitle>{data.subTitle}</SubTitle>
                        <ProductList
                            data={data.products}
                            gutter={30}
                            lg={3}
                            sm={2}
                            xs={1}
                            bt={30}
                        />
                    </Container>
                </HomeProduct>
            </HomeContent>
        </>
    );
}

export default Home;
