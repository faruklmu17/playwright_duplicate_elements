import { test, expect } from '@playwright/test';

test('clicking the second cart button', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/shopping_cart.html');

  const cartButton = page.locator("#add-to-cart")

  console.log("Number of elements: "+await cartButton.count())
  // clicking the second cartButton 

  if (await cartButton.count()>1){

    cartButton.nth(2).click()
  }

  const cartMsg = page.locator("#cartMessage")
  await expect(cartMsg).toHaveText("The third item has been added to your cart!")
  console.log(await cartMsg.textContent())
  await page.waitForTimeout(3000);
  //The second item has been added to your cart!


  
});
