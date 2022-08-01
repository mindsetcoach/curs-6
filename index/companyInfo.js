index.companyInfo = {

    render: function() {

        let descriptionSection = document.querySelector('.section-description > p');
        descriptionSection.innerHTML = index.data.companyInfo.summary;

        let statisticsSectionEmployees = document.querySelector('.section-statistics .statistics-employees');
        statisticsSectionEmployees.innerHTML =
            index.companyInfo.getNumberAsStringWithCommas(index.data.companyInfo.employees);
        let statisticsSectionVehicles = document.querySelector('.section-statistics .statistics-vehicles');
        statisticsSectionVehicles.innerHTML = index.data.companyInfo.vehicles;
        let statisticsSectionLaunchSites = document.querySelector('.section-statistics .statistics-launch-sites');
        statisticsSectionLaunchSites.innerHTML = index.data.companyInfo.launch_sites;
        let statisticsSectionValuation = document.querySelector('.section-statistics .statistics-valuation');
        statisticsSectionValuation.innerHTML =
            index.companyInfo.getNumberAsStringWithCommas(index.data.companyInfo.valuation);
    
        let addressSection = document.querySelector('.section-address > p');
        addressSection.innerHTML = index.companyInfo.formatAddressLine(
            index.data.companyInfo.headquarters
        );

        let socialMediaSectionTwitter = document.querySelector('.section-social-media .social-media-twitter');
        socialMediaSectionTwitter.setAttribute('href', index.data.companyInfo.links.twitter);
        let socialMediaSectionFlickr = document.querySelector('.section-social-media .social-media-flickr');
        socialMediaSectionFlickr.setAttribute('href', index.data.companyInfo.links.flickr);
    },

    formatAddressLine: function(headquarters) {
        return (
            headquarters.address + ', ' +
            headquarters.city + ', ' +
            headquarters.state
        );
    },

    getNumberAsStringWithCommas: function(number) {

        let numberAsString = '' + number;
        let numberAsArray = numberAsString.split('');
        let numberAsArrayWithCommas = [];

        for (let i = numberAsArray.length - 1; i >= 0; i--) {
            numberAsArrayWithCommas.unshift(numberAsArray[i]);
            if ((numberAsArray.length - i) % 3 === 0 && i !== 0) {
                numberAsArrayWithCommas.unshift(',');
            }
        }

        let numberAsStringWithCommas = numberAsArrayWithCommas.join('');
        return numberAsStringWithCommas;
    }
};
