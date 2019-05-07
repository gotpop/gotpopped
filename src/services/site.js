// Site
export class SiteService {

    checkSiteWidth() {

        const queries = {
            small: window
                .matchMedia('(min-width: 0px) and (max-width: 500px)')
                .matches,
            medium: window
                .matchMedia('(min-width: 500px) and (max-width: 900px)')
                .matches,
            large: window
                .matchMedia('(min-width: 900px) and (max-width: 1200px)')
                .matches,
            huge: window
                .matchMedia('(min-width: 1600px)')
                .matches
        };

        if (queries.small) {
            this.width = 'small';
        } else if (queries.medium) {
            this.width = 'medium';
        } else if (queries.large) {
            this.width = 'large';
        } else if (queries.huge) {
            this.width = 'huge';
        }

        return this.width;
    }

}
