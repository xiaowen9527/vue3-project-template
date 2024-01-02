<!-- description: 注册 -->
<!-- fileName: register.vue -->
<!-- author: iwen(1044803551@qq.com) -->

<script setup>
//引入方法
import { reactive, toRefs } from 'vue'
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()


//变量声明
const state = reactive({
    ruleForm: {
        username: '',
        password: ''
    },
    checked: true,
})
const { ruleForm, checked } = toRefs(state)

const rules = {
    username: [
        { required: 'true', message: '账户不能为空', trigger: 'blur' }
    ],
    password: [
        { required: 'true', message: '密码不能为空', trigger: 'blur' }
    ]
}


const submitForm = async () => {
    proxy.$leancloud.av_add_object('admin', state.ruleForm).then(res => {
        console.log(res, 'dddd');
    })
    // proxy.$leancloud.av_query_object('admin', [['equalTo', 'username', 'admins']]).then(res => {
    //     res.forEach(e => {
    //         console.log(e.attributes.username,e.attributes.password, 'dddd');
    //     });
    // })
}

</script>

<template>
    <div class="font-size-50px">

        <input type="text" v-model="ruleForm.username">
        <input type="text" v-model="ruleForm.password">

        <n-gradient-text type="info" @click="submitForm">
            Live Forever
        </n-gradient-text>
        <n-gradient-text type="danger">
            Live Forever
        </n-gradient-text>
        <br>
        <n-gradient-text type="warning">
            Married with Children
        </n-gradient-text>
        <br>
        <n-gradient-text type="success">
            Back in the USSR
        </n-gradient-text>
    </div>
</template>

<style lang="scss" scoped>
.login-container {
    box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
}


.login-form {
    &:deep(.el-form--label-top .el-form-item__label) {
        padding: 0;
    }

    &:deep(.el-form-item) {
        margin-bottom: 0;
    }
}
</style>