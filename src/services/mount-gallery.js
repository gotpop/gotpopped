import Glide from "@glidejs/glide";

class Mount {
    init() {
        const carousel = new Glide(".glide", {
            type: "carousel",
            perView: 1,
            gap: 100
        });
        carousel.mount();
    }
}

export default Mount;
