# Raw XML access

You need raw XML access for: comments, complex formatting, document structure, embedded media, and metadata. For any of these features, you'll need to unpack a document and read its raw XML contents.

#### Unpacking a file
`python ooxml/scripts/unpack.py <office_file> <output_directory>`

#### Key file structures
* `word/document.xml` - Main document contents
* `word/comments.xml` - Comments referenced in document.xml
* `word/media/` - Embedded images and media files
* Tracked changes use `<w:ins>` (insertions) and `<w:del>` (deletions) tags

## Creating a new Word document

When creating a new Word document from scratch, use **docx-js**, which allows you to create Word documents using JavaScript/TypeScript.