# Per-Category Score: 0–100

Start each category at **100** and subtract points based on issues found.

#### Severity Deductions

| Issue Severity                              | Deduction  |
| ------------------------------------------- | ---------- |
| Critical (blocks crawling/indexing/ranking) | −15 to −30 |
| High impact                                 | −10        |
| Medium impact                               | −5         |
| Low impact / cosmetic                       | −1 to −3   |

#### Confidence Modifier

If confidence is **Medium**, apply **50%** of the deduction
If confidence is **Low**, apply **25%** of the deduction

---

## Example (Category)

> Crawlability & Indexation (Weight: 30)

* Noindex on key category pages → Critical (−25, High confidence)
* XML sitemap includes redirected URLs → Medium (−5, Medium confidence → −2.5)
* Missing sitemap reference in robots.txt → Low (−2)

**Raw score:** 100 − 29.5 = **70.5**
**Weighted contribution:** 70.5 × 0.30 = **21.15**

---

## Overall SEO Health Index