//templates
contentArea = document.querySelector('.content');

serviceSiteDev = document.querySelector('#site-development');
serviceSiteDev.addEventListener('click', function () {
  siteTypeBlock = document.querySelector('.cms');
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