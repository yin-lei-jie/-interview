import request from '@/utils/request';

// 登录接口
export let login = (code: string) => {
    return request.post('/user/code2session', { code });
}