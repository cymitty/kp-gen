//templates
contentArea = document.querySelector('.content');

serviceSiteDev = document.querySelector('#site-development');
serviceSiteDev.addEventListener('click', function () {
  siteTypeBlock = document.querySelector('.site-development-block');
    if (siteTypeBlock.style.display === 'block') {
      siteTypeBlock.style.display = 'none';
    } else {
      siteTypeBlock.style.display = 'block';
    }
});

bitrixType = document.querySelector('#bitrix');
bitrixType.addEventListener('click', function () {
  parent = document.querySelector('.bitrix-block');
  if (parent.style.display === 'block') {
    parent.style.display = 'none';
  } else {
    parent.style.display = 'block';
  }
});

wordpressType = document.querySelector('#wordpress');
wordpressType.addEventListener('click', function () {
  parent = document.querySelector('.wordpress-block');
  if (parent.style.display === 'block') {
    parent.style.display = 'none';
  } else {
    parent.style.display = 'block';
  }
});

generatePDFButton = document.querySelector('.generate-pdf');
generatePDFButton.addEventListener('click', function () {
  //Проверка выбрана ли хоть одна услуга
  serviceSelected = false;
  servicesInputs = document.querySelectorAll('.services-menu input');
  servicesInputs.forEach(function (service) {
    if (service.checked) {
      serviceSelected = true;
    }
  });
  if (!serviceSelected) return;

  //preparing Data
  let kpData = new Object();
  let companyName = (document.querySelector('#company-name')).value;

  let siteDevelopmentSelected = (document.querySelector('#site-development')).checked ? true : false;
  let seoPromotionSelected = (document.querySelector('#seo-promotion')).checked ? true : false;
  let contextualAdvertisingSelected = (document.querySelector('#contextual-advertising')).checked ? true : false;

  // Если выбрана услуга разработка сайта
  if (siteDevelopmentSelected) {
    let serviceName = document.querySelector('#site-development');
    let siteTypeSelected =  document.querySelector('.site-type .item input:checked');
    kpData.serviceType = serviceName.dataset.serviceName;
    kpData.siteType = siteTypeSelected.dataset.typeName;

    //Выбор системы управления сайтом (CMS)
    let bitrixCMSSelected = (document.querySelector('#bitrix')).checked ? true : false;
    let wordpressCMSSelected = (document.querySelector('#wordpress')).checked ? true : false;

    if (bitrixCMSSelected) {
      cmsText = (document.querySelector('#bitrix-text-area')).value;
      cmsPrice = (document.querySelector('#bitrix-price-area')).value;

      kpData.cmsBitrix = {text: cmsText, price: cmsPrice};
    }

    if (wordpressCMSSelected) {
      cmsText = (document.querySelector('#wordpress-text-area')).value;
      cmsPrice = (document.querySelector('#wordpress-price-area')).value;

      kpData.cmsWordpress = {text: cmsText, price: cmsPrice};
    }

  }

  console.log(kpData);
});