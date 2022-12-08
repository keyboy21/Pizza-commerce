import { test, expect } from '@playwright/test';

test('homepage test', async ({ page }) => {

  await page.goto('https://pizza-cmmerce.netlify.app/');
  await expect(page).toHaveTitle('Vite + React + TS')

  // Categories test
  const categories = page.locator('.categories');
  await expect(categories.locator('ul > li')).toContainText(['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']);
  await expect(categories.getByText("Все")).toHaveClass("active")

  const activated = page.locator('.categories');
  await activated.getByText('Мясные').click();
  await expect(activated.getByText("Мясные")).toHaveClass("active")
  await activated.getByText('Вегетарианская').click();
  await expect(activated.getByText("Вегетарианская")).toHaveClass("active")


  // Sort test
  const Sort = page.locator('.sort__label');
  await Sort.getByText('популярности (High);').click();

  const Sorts = page.locator('.sort__popup');
  await expect(Sorts.locator('ul > li')).toContainText(['популярности (High);', 'популярности (Low)', 'цене (High)', 'цене (Low)', 'алфавиту (High)', 'алфавиту (Low)']);
  await Sorts.getByText('популярности (Low)').click();
  await Sort.getByText('популярности (Low)')


});



test('Cart page test', async ({ page }) => {

  await page.goto('https://pizza-cmmerce.netlify.app/');
  await page.locator('.button--cart').click()
  await expect(page).toHaveURL("https://pizza-cmmerce.netlify.app/cart");

  const HaveaText = page.locator('.cart--empty');
  await expect(HaveaText.locator('h2')).toHaveText("Корзина пустая 😕")
  await expect(HaveaText.locator('p')).toHaveText("Вероятней всего, вы не заказывали ещё пиццу.Для того, чтобы заказать пиццу, перейди на главную страницу.")
  await expect(HaveaText.locator('a > span > span')).toHaveText("Вернуться назад")
  await HaveaText.getByText("Вернуться назад").click()
  await expect(page).toHaveURL("https://pizza-cmmerce.netlify.app/");

});
