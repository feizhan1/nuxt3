import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// import { useUser } from '~/store/user';

// 获取状态，转换为 Ref，其他代码无需改变
// const store = useUser();
// const { isLogin } = storeToRefs(store)

// 文章目录
const postsDir = path.join(process.cwd(), 'content')

export default defineEventHandler(async (event) => {
  const fileName = `${getRouterParam(event, 'id')}.md`

  // 获取请求体
  // const body = await readBody(event);

  // 获取查询参
  // const query = getQuery(event);

  // 获取文章内容
  const fullPath = path.join(postsDir, fileName)
  try {
    fs.accessSync(fullPath)
    const fileContent = fs.readFileSync(fullPath, 'utf-8')

    // 解析扉页信息
    const matterInfo = matter(fileContent)

    // 转换markdown为HTML
    const processedContent = await remark().use(html).process(matterInfo.content)
    const content = processedContent.toString()

    return {
      title: matterInfo.data.title,
      content,
    }
  }
  catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: 'article is not exist',
    })
    // return sendError(
    //   event,
    //   createError({
    //     statusCode: 404,
    //     statusMessage: '不存在'
    //   })
    // )
  }
})
