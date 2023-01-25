import { Given, When,Then} from "@wdio/cucumber-framework";
import chai from "chai";


Given(/^Open google$/, async function(){

   await browser.url("https://google.com");
   await browser.pause(7000);
});


When(/^Search a (.*)$/, async function(searchItem){

   console.log(searchItem);

   let ele= await $(`[name=q]`);
   await ele.setValue(searchItem);
   await browser.keys("Enter");

});

Then(/^Click on first search result$/, async function(){

   console.log("Click on first search result");
   let ele = await $('<h3>');
   ele.click();

});

Then(/^URL should match (.*)$/, async function(expectedurl) {
   console.log(expectedurl);
   let url = await browser.getUrl();
   chai.expect(url).to.equal(expectedurl);
})
