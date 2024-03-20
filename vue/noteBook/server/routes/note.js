const Router = require('@koa/router')
const router = new Router()
const { findNoteListByType, findNoteListById } = require('../controllers/mysqlControl.js')

router.post('/findNoteListByType', async(ctx) => {
    const { note_type } = ctx.request.body
    try {
        const res = await findNoteListByType(note_type)
        ctx.body = {
            code: '8000',
            data: res,
            msg: 'success'
        }
    } catch (error) {   // 程序性错误
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }
})

router.get('/findNoteDetailById', async(ctx) => {
    // console.log(ctx.query);
    const { id } = ctx.query
    try {
        const res = await findNoteListById(id)
        if(res.length){
            ctx.body = {
                code: '8000',
                data: res[0],
                msg: 'success'
            }
        }else{
            ctx.body = {
                code: '8004',
                data: '查找失败',
                msg: 'success'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }
})

module.exports = router