cd ./frontend
docker build -t congmeng1015/newcoder-frontend .
cd ..

cd ./backend
DOCKER_BUILDKIT=1 docker build -t congmeng1015/newcoder .
cd ..