var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://0.0.0.0:8088');
var i =0;
while(i<11){
    i++;
    driver.findElement(By.id('thumb')).click();
    driver.sleep(500);
}

driver.quit();


