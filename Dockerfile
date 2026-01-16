# 32비트 라즈베리파이에 최적화된 Nginx 이미지 사용
FROM arm32v7/nginx:alpine

# 파일 복사
COPY . /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]