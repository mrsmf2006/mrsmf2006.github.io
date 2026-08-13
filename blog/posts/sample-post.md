# Sample Blog Post

This is a sample markdown file for your blog. You can create new posts by:

1. Creating a new `.md` file in `blog/posts/`
2. Adding the post metadata to `config.js` in the `DB.blog.posts` array
3. Writing your content in markdown format

## How to Add a New Post

In `config.js`, add a new object to the `blog.posts` array:

```javascript
{
    slug: "your-post-slug",
    title: "Your Post Title",
    excerpt: "A brief description of your post",
    date: "Month Day, Year",
    readTime: "X min read",
    tags: ["Tag1", "Tag2"],
    author: "Your Name",
    content: `
        # Your Markdown Content Here
        
        Write your full post content using markdown syntax.
    `
}
```

## Markdown Support

Your posts support:

- **Bold text** with `**text**`
- *Italic text* with `*text*`
- `Inline code` with backticks
- Links: [text](url)
- Images: ![alt](url)

### Code Blocks

```python
def hello_world():
    print("Hello, World!")
```

### Lists

- Item 1
- Item 2
- Item 3

### Blockquotes

> This is a quote

## Tips

1. Write clear, engaging titles
2. Use proper markdown formatting
3. Add relevant tags for categorization
4. Keep excerpts concise (2-3 sentences)

Happy blogging! 🎉
