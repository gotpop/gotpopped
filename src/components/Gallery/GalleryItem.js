import React from "react";

const GalleryItem = ({ item }) => (
    <li key={`item-${item.id}`} className="glide__slide">
        <article className="glide__article">
            <h2 className="glide__title">{item.name}</h2>
            <p className="glide__text" key={item.id}>
                {item.modules[1].text_plain}
            </p>
        </article>
        <figure className="glide__figure">
            <img
                width="1001"
                height="569"
                className={item.name}
                key={item.id}
                src={item.modules[0].sizes.original}
                alt="Gallery"
            />
        </figure>
    </li>
);

export default GalleryItem;
