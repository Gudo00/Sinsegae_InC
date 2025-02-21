import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        host: '0.0.0.0',  // 외부 접속 허용
        strictPort: true  // 포트가 사용 중이면 오류 발생 (선택 사항)
    }
});