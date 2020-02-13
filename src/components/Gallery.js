import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/gallery.css";
import flags from "../assets/images/cartoes.jpg"

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullPortfolio: false,
        }
    }

    renderGallery() {
        const { images } = this.props;

        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (
                <div className="product" key={i}>
                    <a
                        target="_blank"
                        className="portfolio-link-img"
                        href="https://example.com/"
                    >
                        <img src={`${require('../assets/images/products/' + obj.Imagem)}`} />
                    </a>

                    <h3 className="product-name">{obj.Name}</h3>
                    <div className="product-info">
                        <div className="product-portion">
                            {obj.Parcela}
                            <img src={flags} alt="flags" />
                        </div>
                        <div> Ou </div>
                        <div className="product-price">
                            {obj.Preco}
                        </div>
                    </div>
                </div>
            );
        });


        return (
            <section id="two" className="portfolio-home">
                <div className="product-grid">
                    <div className="slider-mob">
                        <Slider>{gallery}</Slider>
                    </div>

                    <div className="slider-desk">
                        {gallery}
                    </div>
                </div>
            </section>
        );
    }

    render() {
        return (
            <div>
                {this.renderGallery()}
            </div>
        );
    }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    images: PropTypes.array
};

export default Gallery;