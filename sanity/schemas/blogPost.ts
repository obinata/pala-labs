export default {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "titleEn",
      title: "Title (EN)",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "titleJa",
      title: "Title (JA)",
      type: "string",
    },
    {
      name: "excerptEn",
      title: "Excerpt (EN)",
      type: "text",
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "excerptJa",
      title: "Excerpt (JA)",
      type: "text",
      rows: 3,
    },
    {
      name: "contentEn",
      title: "Content (EN)",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [{ name: "href", type: "url", title: "URL" }],
              },
            ],
          },
        },
        { type: "image", options: { hotspot: true } },
        {
          name: "youtube",
          type: "object",
          title: "YouTube Video",
          fields: [
            { name: "url", type: "url", title: "YouTube URL" },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "contentJa",
      title: "Content (JA)",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [{ name: "href", type: "url", title: "URL" }],
              },
            ],
          },
        },
        { type: "image", options: { hotspot: true } },
        {
          name: "youtube",
          type: "object",
          title: "YouTube Video",
          fields: [
            { name: "url", type: "url", title: "YouTube URL" },
          ],
        },
      ],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Technology", value: "Technology" },
          { title: "Philosophy", value: "Philosophy" },
          { title: "Events", value: "Events" },
          { title: "Community", value: "Community" },
        ],
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    },
  ],
  orderings: [
    {
      title: "Published Date, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
};
