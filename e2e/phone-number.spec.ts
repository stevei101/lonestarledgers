import { test, expect } from '@playwright/test'

test.describe('Business Phone Number', () => {
  test('contact section shows phone number with correct tel: link', async ({ page }) => {
    await page.goto('/')
    
    const contactSection = page.locator('#contact')
    await expect(contactSection).toBeVisible()
    
    const phoneText = await contactSection.getByText('(512) 631-4407')
    await expect(phoneText).toBeVisible()
    
    const phoneLink = contactSection.getByRole('link', { name: '(512) 631-4407' })
    await expect(phoneLink).toHaveAttribute('href', 'tel:+15126314407')
  })

  test('footer shows phone text link and icon link with correct href', async ({ page }) => {
    await page.goto('/')
    
    const footer = page.getByRole('contentinfo')
    await expect(footer).toBeVisible()
    
    const phoneTextLink = footer.getByRole('link', { name: '(512) 631-4407', exact: true }).first()
    await expect(phoneTextLink).toBeVisible()
    await expect(phoneTextLink).toHaveAttribute('href', 'tel:+15126314407')
    
    const phoneIconLink = footer.getByRole('link', { name: /call.*512.*631.*4407/i })
    await expect(phoneIconLink).toBeVisible()
    await expect(phoneIconLink).toHaveAttribute('href', 'tel:+15126314407')
    
    const allPhoneLinks = await footer.locator('a[href="tel:+15126314407"]').count()
    expect(allPhoneLinks).toBeGreaterThanOrEqual(2)
  })

  test('index.html JSON-LD contains telephone field', async ({ page }) => {
    await page.goto('/')
    
    const jsonLdScript = page.locator('script[type="application/ld+json"]')
    const jsonLdContent = await jsonLdScript.textContent()
    
    expect(jsonLdContent).toBeTruthy()
    const structuredData = JSON.parse(jsonLdContent!)
    
    expect(structuredData.telephone).toBe('+15126314407')
    expect(structuredData['@type']).toBe('ProfessionalService')
    expect(structuredData.name).toBe('Lone Star Ledgers')
  })

  test('mobile viewport - contact phone link is visible', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'Mobile Chrome', 'Mobile test runs on Mobile Chrome project')
    
    await page.goto('/')
    
    const contactSection = page.locator('#contact')
    await contactSection.scrollIntoViewIfNeeded()
    
    const phoneLink = contactSection.getByRole('link', { name: '(512) 631-4407' })
    await expect(phoneLink).toBeVisible()
    
    const boundingBox = await phoneLink.boundingBox()
    expect(boundingBox).toBeTruthy()
    expect(boundingBox!.width).toBeGreaterThan(0)
    expect(boundingBox!.height).toBeGreaterThan(0)
  })
})

test.describe('Visual Regression - Screenshots', () => {
  test('desktop - contact section screenshot', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium', 'Desktop screenshots on Desktop Chrome only')
    
    await page.goto('/')
    const contactSection = page.locator('#contact')
    await contactSection.scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)
    
    await contactSection.screenshot({ 
      path: 'artifacts/contact-section-desktop.png',
      animations: 'disabled'
    })
  })

  test('desktop - footer screenshot', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium', 'Desktop screenshots on Desktop Chrome only')
    
    await page.goto('/')
    const footer = page.getByRole('contentinfo')
    await footer.scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)
    
    await footer.screenshot({ 
      path: 'artifacts/footer-desktop.png',
      animations: 'disabled'
    })
  })

  test('mobile - contact section screenshot', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'Mobile Chrome', 'Mobile screenshots on Mobile Chrome only')
    
    await page.goto('/')
    const contactSection = page.locator('#contact')
    await contactSection.scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)
    
    await contactSection.screenshot({ 
      path: 'artifacts/contact-section-mobile.png',
      animations: 'disabled'
    })
  })

  test('mobile - footer screenshot', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'Mobile Chrome', 'Mobile screenshots on Mobile Chrome only')
    
    await page.goto('/')
    const footer = page.getByRole('contentinfo')
    await footer.scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)
    
    await footer.screenshot({ 
      path: 'artifacts/footer-mobile.png',
      animations: 'disabled'
    })
  })
})
