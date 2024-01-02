// 引入
import av from 'leancloud-storage'


// 保存对象
/**
 * 
 * @param {String} name 声明leancloud的class和构建对象的name
 * @param {Object} data 需要保存并上传到数据库中的对象
 */
const av_add_object = (name, data) => {

    if (!Object.keys(data).length) return

    return new Promise((resolve, reject) => {
        // 声明class和构建对象的name
        let av_add_object = null
        av_add_object = av.Object.extend(name);
        // 构建对象
        let obj = new av_add_object();

        // 为属性赋值
        // 属性是否有值
        let hasVal = true
        for (const key in data) {
            // 判断data里面每个对象是否都有值
            if (data[key] == '' || data[key] == undefined) {
                hasVal = false
            }
            obj.set(key, data[key]);
        }

        if (!hasVal) return

        // 将对象保存到云端
        obj.save().then(
            (res) => {
                // 成功之后，执行其他逻辑
                data = {}
                resolve(res);
            },
            (error) => {
                // 异常处理
                reject(error);
            }
        );
    })
}

//获取对象
/**
 * 
 * @param {String} name 声明leancloud的class和构建对象的name
 * @param {Array} id  leancloud示例的objectId
 * @returns 
 */
const av_query_objectId = (name, id) => {

    if (!id) return

    return new Promise((resolve, reject) => {
        let query = null
        query = new av.Query(name);
        query.get(id).then(
            (res) => {
                // 成功之后，执行其他逻辑
                resolve(res);
            },
            (error) => {
                // 异常处理
                reject(error);
            }
        );
    })
}

// 查询(支持多条件)
/**
 * 
 * @param {String} name  声明leancloud的class和构建对象的name
 * @param {Array} params 查询条件 tip:[['equalTo', 'username', 'admins']]   0:条件关键字、1:字段、2:字段值
 */
const av_query_object = (name, params) => {

    if (!params.length) return

    return new Promise((resolve, reject) => {
        let query = null
        query = new av.Query(name);

        // 
        params.forEach(e => {
            query[e[0]](e[1], e[2]);
        });

        query.find().then(
            (res) => {
                // 成功之后，执行其他逻辑
                resolve(res);
            },
            (error) => {
                // 异常处理
                reject(error);
            }
        );
    })
}




export default {
    // 保存对象
    av_add_object,
    // 获取对象
    av_query_objectId,
    // 查询(支持多条件)
    av_query_object
}