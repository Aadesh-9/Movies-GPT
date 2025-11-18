const worker = {
  async fetch(request, env) {
    try {
      return await env.ASSETS.fetch(request);
    } catch (err) {
      const url = new URL(request.url);
      url.pathname = "/index.html";
      return await env.ASSETS.fetch(url);
    }
  },
};

export default worker;
