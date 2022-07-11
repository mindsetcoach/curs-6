index.companyInfo = {

    render: function() {
        let descriptionSection = document.querySelector('.section-description > p');
        descriptionSection.innerHTML = index.data.companyInfo.summary;
    
        let addressSection = document.querySelector('.section-address > p');
        addressSection.innerHTML = index.companyInfo.formatAddressLine(
            index.data.companyInfo.headquarters
        );
    },

    formatAddressLine: function(headquarters) {
        return (
            headquarters.address + ', ' +
            headquarters.city + ', ' +
            headquarters.state
        );
    }
};
