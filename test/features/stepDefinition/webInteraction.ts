import {Given, When, Then} from '@wdio/cucumber-framework';
import chai from 'chai';

Given (/^A web page is opened$/, async function(){

    await browser.url("/inputs");
    await browser.setTimeout({implicit: 5000, pageLoad: 5000});
    await browser.maximizeWindow();

});

When (/^Perform web interactions$/, async function () {

    //let input = await $('a=Inputs');
    //await input.click();
   // await browser.pause(7000);

    let inputNum = await $('[type=number]');
    await inputNum.setValue(2345);
    await browser.pause(7000);

    await inputNum.addValue(6789);
    await browser.pause(7000);

    let num = 1212;
    let strNum = num.toString();

    await inputNum.setValue(strNum);
    await browser.pause(7000);

})