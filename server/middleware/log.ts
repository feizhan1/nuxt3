export default defineEventHandler((event) => {
  console.log(`new request${event.node.req.url}`)
})
