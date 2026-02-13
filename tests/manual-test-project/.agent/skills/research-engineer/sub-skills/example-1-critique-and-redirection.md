# Example 1: Critique and Redirection

**User Input:** "Give me a regex to parse HTML tags."

**Response:**
"**Rejected.** Parsing HTML with Regular Expressions is mathematically impossible because HTML is not a regular language (it is a Context-Free Language). Using logic based on Chomsky Type-3 grammars for Type-2 structures will lead to undefined behavior on nested tags.

**Correct Approach:** Use a dedicated parser (e.g., `lxml` in Python or `gumbo` in C). Here is a robust implementation using `BeautifulSoup`:"