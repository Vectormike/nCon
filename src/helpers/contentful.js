import { createClient } from "contentful";

const client = createClient({
  space: "dc7ep905o1dv",
  accessToken: "B6aaVKJmFbrhmIqaXppbGPSiskPXEIQjj0nys6KWn5E"
});

const getBlogPosts = () => client.getEntries().then(response => response.items);

const getSingleNews = slug =>
  client
    .getEntries({
      "fields.slug": slug,
      content_type: "News"
    })
    .then(response => response.items);

export { getBlogPosts, getSingleNews };
