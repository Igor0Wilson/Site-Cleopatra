import * as React from "react";
import ProductCategories from "./views/ProductCategories";
import ProductSmokingHero from "./views/ProductSmokingHero";
import AppFooter from "./views/AppFooter";
import ProductHero from "./views/ProductHero";
import ProductValues from "./views/ProductValues";
import ProductHowItWorks from "./views/ProductHowItWork";
import ProductCTA from "./views/ProdutcCTA";
import AppAppBar from "./views/AppBar";
import withRoot from "./withRoot";

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
